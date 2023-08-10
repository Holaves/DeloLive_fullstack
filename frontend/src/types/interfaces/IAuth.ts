import { IUser } from "./IUser";

interface IAuth{
    user: IUser;
    isAuth: boolean;
    isLoading: boolean;
    isEmailSend: boolean;
    isLoadingForm: boolean
    registrationError: string;
    loginError: string;
}

export default IAuth;