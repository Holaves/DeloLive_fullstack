import mongoose from "mongoose";

const Offer = new mongoose.Schema({
    description: {type: String, required: true},
    image: {type: String},
})


export default mongoose.model('Offer', Offer)