import express from 'express';
const router = express.Router();
import coursesController from '../controllers/courses.controller.js';


/* GET programming languages. */
router.get('/', coursesController.get);

/* POST programming language */
router.post('/', coursesController.create);

/* PUT programming language */
router.put('/:id', coursesController.update);

/* DELETE programming language */
router.delete('/:id', coursesController.remove);

export default router;
