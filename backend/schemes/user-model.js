import { Schema, model } from "mongoose";

const UserSchema = new Schema({
    email: {type: String, unique: true, required: true},
    password: {type: String, unique: false, required: true},
    
    surname: {type: String, unique: false, required: true},
    name: {type: String, unique: false, required: true},
    fatherName: {type: String, unique: false, required: false},
    telephone: {type: String, unique: true, required: true},
    birthdate: {type: String, unique: false, required: true},
    isMailing: {type: Boolean, unique: false, required: true},
    card: {type: String, unique: false, required: true},

    isActivated: {type: Boolean, default: false},
    activationLink: {type: String, required: true},

})

export default model('User', UserSchema);
