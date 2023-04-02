import Router from 'express';
import OfferController from '../Controllers/OfferController.js';

const router = new Router()

router.post('/offers', OfferController.create)
router.get('/offers', OfferController.getAll)
router.get('/offers/:id', OfferController.getOne)
router.put('/offers/:id', OfferController.update)
router.delete('/offers/:id', OfferController.delete)

export default router;