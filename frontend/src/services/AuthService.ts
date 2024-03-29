import { AxiosResponse } from "axios";
import { AuthResponse } from "../types/interfaces/AuthResponse";
import $api from "../http";
import userModel from "../types/UserModel";

export default class AuthService {
    static async login(email: string, password: string): Promise<AxiosResponse<AuthResponse>> {
        return $api.post<AuthResponse>('/auth/login', {email, password})
    }
    static async registration(registrationData: userModel): Promise<AxiosResponse<AuthResponse>> {
        console.log(registrationData)
        return $api.post<AuthResponse>('/auth/registration', registrationData)
    }
    static async logout(): Promise<void> {
        return $api.post('/auth/logout')
    }
}

