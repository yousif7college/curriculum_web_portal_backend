import generalDB from '../services/generalDB.service.js';

async function create(req, res, next) {
  try {
    const teacher_id = req.body.teacher_id;
    delete req.body.teacher_id;
    const coursesRes = await generalDB.create(req.body, req.tableName)
    console.log("coursesRes", coursesRes);
    const pivotRow = {
      course_id: coursesRes?.data?.id,
      teacher_id: teacher_id,
    }
    await generalDB.create(pivotRow, 'courses_teachers');
    res.json({ ...coursesRes, teacher_id: teacher_id });
  } catch (err) {
    console.error(`Error while creating ${req.tableName}`, err.message);
    next(err);
  }
}

async function update(req, res, next) {
  try {
    const oldPivotRow = await generalDB.getOneByColumn('course_id', req.params.id, 'courses_teachers');

    const teacher_id = req.body.teacher_id;
    delete req.body.teacher_id;
    const coursesRes = await generalDB.update(req.params.id, req.body, req.tableName);

    await generalDB.update(oldPivotRow.id, { teacher_id: teacher_id }, 'courses_teachers');
    res.json({ ...coursesRes, teacher_id: teacher_id });
  } catch (err) {
    console.error(`Error while updating ${req.tableName}`, err.message);
    next(err);
  }
}

export default {
  create,
  update,
};
