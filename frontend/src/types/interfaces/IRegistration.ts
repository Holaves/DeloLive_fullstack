import userModel from "../UserModel";


interface IRegistration{
    isValidate: boolean;
    isState: boolean;
    setPassword: string;
    createUserData: userModel;
    isSetPassword: boolean;
}

export default IRegistration