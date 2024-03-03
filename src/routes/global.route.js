import express from 'express';
import globalController from '../controllers/global.controller.js';

const router = express.Router();

/* GET table rows. */
router.get('/', globalController.get);

/* GET test. */
router.get('/test', globalController.test);

/* GET row. */
router.get('/:id', globalController.getOne);

/* POST row */
router.post('/', globalController.create);

/* PUT row */
router.put('/:id', globalController.update);

/* DELETE row */
router.delete('/:id', globalController.remove);


export default router;
