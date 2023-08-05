import Offer from "../schemes/offer-model.js";
import fileService from "./file-service.js";

class OfferService {
    async create(offer, image) {
        const fileName = fileService.saveFile(image);
        const createdOffer = await Offer.create({...offer, image: fileName});
        return createdOffer;
    }

    async getAll() {
        const offers = await Offer.find();
        return offers;
    }
    async getOne(id) {
        if (!id) {
            throw new Error('не указан ID')
        }
        const offer = await Offer.findById(id);
        return offer;
    }

    async update(offer) {
        if (!offer._id) {
            throw new Error('не указан ID')
        }
        const updatedOffer = await Offer.findByIdAndUpdate(offer._id, offer, {new: true})
        return updatedOffer;
    }

    async delete(id) {
        if (!id) {
            throw new Error('не указан ID')
        }
        const offer = await Offer.findByIdAndDelete(id);
        return offer;
    }
}


export default new OfferService();