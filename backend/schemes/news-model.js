import mongoose from "mongoose";

const News = new mongoose.Schema({
    description: {type: String, required: true},
    image: {type: String},
    subDescription: {type: Array, required: false},
    date: {type: String, required: true}
})


export default mongoose.model('News', News)