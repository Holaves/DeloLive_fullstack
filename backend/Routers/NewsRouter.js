import Router from 'express';
import NewsController from '../Controllers/NewsController.js';

const router = new Router()

router.post('/news', NewsController.create)
router.get('/news', NewsController.getAll)
router.get('/news/:id', NewsController.getOne)
router.put('/news/:id', NewsController.update)
router.delete('/news/:id', NewsController.delete)

export default router;