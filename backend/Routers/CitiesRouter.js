import Router from 'express';
import CitiesController from '../contollers/cities-contoller.js';

const router = new Router()

router.get('/cities', CitiesController.getAll)

export default router;