import { IUser } from "./IUser";

interface IAuth{
    user: IUser;
    isAuth: boolean;
    isLoading: boolean;
}

export default IAuth;