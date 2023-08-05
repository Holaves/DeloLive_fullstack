import Router from 'express';
import AuthController from '../contollers/auth-controller.js';
import { body } from "express-validator";
import authMiddleware from '../middlewares/auth-middleware.js';

const router = new Router()

router.post('/registration',
    AuthController.registration
)
router.post('/login', AuthController.login)
router.post('/logout', AuthController.logout)
router.get('/activate/:link', AuthController.activate)
router.get('/refresh', AuthController.refresh)
router.get('/users', authMiddleware, AuthController.getUsers)

export default router;