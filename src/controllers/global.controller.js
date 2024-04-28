import generalDB from '../services/generalDB.service.js';

async function get(req, res, next) {
  try {
    const searchParamsKeys = Object.keys(req.query)
    console.log("🍅", req.tableName, req.query, searchParamsKeys, req?.query?.[searchParamsKeys[0]]);
    if (searchParamsKeys.length === 0) {
      res.json(await generalDB.getAll(req.query.page, req.tableName));
    } else {
      res.json(await generalDB.getAllByColumn(searchParamsKeys[0], req?.query?.[searchParamsKeys[0]], req.query.page, req.tableName));
    }

  } catch (err) {
    console.error(`Error while getting all from ${req.tableName}`, err.message);
    next(err);
  }
}

async function getOne(req, res, next) {
  try {
    res.json(await generalDB.getOne(req.params.id, req.tableName));
  } catch (err) {
    console.error(`Error while getting one from ${req.tableName}`, err.message);
    next(err);
  }
}

async function create(req, res, next) {
  try {
    res.json(await generalDB.create(req.body, req.tableName));
  } catch (err) {
    console.error(`Error while creating ${req.tableName}`, err.message);
    next(err);
  }
}

async function update(req, res, next) {
  try {
    res.json(await generalDB.update(req.params.id, req.body, req.tableName));
  } catch (err) {
    console.error(`Error while updating ${req.tableName}`, err.message);
    next(err);
  }
}

async function remove(req, res, next) {
  try {
    res.json(await generalDB.remove(req.params.id, req.tableName));
  } catch (err) {
    console.error(`Error while deleting ${req.tableName}`, err.message);
    next(err);
  }
}

async function test(req, res, next) {
  try {
    res.json({ message: `Test from ${req.tableName}` })
  } catch (err) {
    console.error(`Error while testing ${req.tableName}`, err.message);
    next(err);
  }
}

export default {
  get,
  getOne,
  create,
  update,
  remove,
  test
};
