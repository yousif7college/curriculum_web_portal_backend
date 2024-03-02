import generalDB from '../services/generalDB.service.js';

async function get(req, res, next) {
  try {
    res.json(await generalDB.getAll(req.query.page, 'courses'));
  } catch (err) {
    console.error(`Error while getting from courses`, err.message);
    next(err);
  }
}

async function create(req, res, next) {
  try {
    res.json(await generalDB.create(req.body, 'courses'));
  } catch (err) {
    console.error(`Error while creating courses`, err.message);
    next(err);
  }
}

async function update(req, res, next) {
  try {
    res.json(await generalDB.update(req.params.id, req.body, 'courses'));
  } catch (err) {
    console.error(`Error while updating cources`, err.message);
    next(err);
  }
}

async function remove(req, res, next) {
  try {
    res.json(await generalDB.remove(req.params.id, 'courses'));
  } catch (err) {
    console.error(`Error while deleting courses`, err.message);
    next(err);
  }
}

export default {
  get,
  create,
  update,
  remove
};
