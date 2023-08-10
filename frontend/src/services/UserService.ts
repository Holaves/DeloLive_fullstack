import { AxiosResponse } from "axios";
import { IUser } from "../types/interfaces/IUser";
import $api from "../http";

export default class UserService {
    static fetchUsers(): Promise<AxiosResponse<IUser[]>>{
        return $api.get<IUser[]>('/auth/users')
    }
}