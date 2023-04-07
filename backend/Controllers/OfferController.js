import OfferService from '../Services/OffersService.js';

class OfferController{
    async create(req, res) {
        try {
            const offer = await OfferService.create(req.body, req.files.image)
            res.json(offer)
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async getAll(req, res) {
        try {
            const offers = await OfferService.getAll();
            return res.json(offers);
        } catch (e) {
            res.status(500).json(e)
        }
    }
    async getOne(req, res) {
        try {
            const offerDB = await OfferService.getOne(req.params.id)
            return res.json(offer)
        } catch (e) {
            res.status(500).json(e)
        }
    }
    async update(req, res) {
        try {
            const updatedOffer = await OfferService.update(req.body);
            return res.json(updatedOffer);
        } catch (e) {
            res.status(500).json(e.message)
        }
    }
    async delete(req, res) {
        try {
            const offer = await OfferService.delete(req.params.id);
            return res.json(offer)
        } catch (e) {
            res.status(500).json(e)
        }
    }
}



export default new OfferController()