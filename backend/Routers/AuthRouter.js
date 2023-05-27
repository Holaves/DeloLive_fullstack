import Router from 'express';
import RegistrationController from '../Controllers/RegistrationController.js';

const router = new Router()

router.post('/registration', RegistrationController.createUser)

export default router;