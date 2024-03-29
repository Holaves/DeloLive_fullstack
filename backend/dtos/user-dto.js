export default class UserDto {
    surname;
    id;
    name;
    fatherName;
    telephone;
    email;
    birthdate;
    card;
    isMailing;
    isActivated;

    constructor(model){
        this.email = model.email
        this.surname = model.surname
        this.name = model.name
        this.telephone = model.telephone
        this.birthdate = model.birthdate
        this.isMailing = model.isMailing
        this.card = model.card
        this.id = model._id
        this.isActivated = model.isActivated
    }
}