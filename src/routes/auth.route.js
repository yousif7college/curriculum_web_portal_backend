import express from 'express';


import authController from '../controllers/auth.controller.js';

const router = express.Router();

/* GET table rows. */
router.post('/login', authController.login);


export default router;
