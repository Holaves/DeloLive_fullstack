import LoginModel from "../LoginModel";

interface ILogin {
    isState: boolean;
    sendCounter: number;
    createUserData: LoginModel
}

export default ILogin