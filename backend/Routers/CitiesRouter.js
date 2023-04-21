import Router from 'express';
import CitiesController from '../Controllers/CitiesController.js';

const router = new Router()

router.get('/cities', CitiesController.getAll)

export default router;