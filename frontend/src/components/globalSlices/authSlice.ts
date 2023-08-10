import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import IAuth from "../../types/interfaces/IAuth";
import { IUser } from "../../types/interfaces/IUser";
import AuthService from "../../services/AuthService";
import userModel from "../../types/UserModel";
import { AuthResponse } from "../../types/interfaces/AuthResponse";
import axios from "axios";
import { API_URL } from "../../http";

const initialState: IAuth = {
    user: {} as IUser,
    isAuth: false,
    isLoading: false,
    isEmailSend: false,
    isLoadingForm: false,
    registrationError: '',
    loginError: ''
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAuth(state, action: PayloadAction<boolean>) {
            state.isAuth = action.payload
        },
        setUser(state, action: PayloadAction<IUser>) {
            state.user = action.payload
        },
        setIsLoading(state, action: PayloadAction<boolean>) {
            state.isLoading = action.payload
        },
        setIsLoadingForm(state, action: PayloadAction<boolean>) {
            state.isLoadingForm = action.payload
        },
        setIsEmailSend(state, action: PayloadAction<boolean>) {
            state.isEmailSend = action.payload
        },
        setRegistrationError(state, action: PayloadAction<string>) {
            state.registrationError = action.payload
        },
        setLoginError(state, action: PayloadAction<string>) {
            state.loginError = action.payload
        }
     }
})

export const { setAuth, setUser, setIsLoading, setIsLoadingForm, setIsEmailSend, setRegistrationError, setLoginError } = authSlice.actions;

export const login = (email: string, password: string) => async (dispatch: any) => {
    dispatch(setIsLoadingForm(true))
    try {
        const response = await AuthService.login(email, password);
        console.log(response);
        if(response.status === 200) {
            dispatch(setLoginError(''))
        }
        localStorage.setItem("token", response.data.accessToken);

        dispatch(setAuth(true));
        dispatch(setUser(response.data.user));
    } catch (e: any) {
        dispatch(setLoginError(e.response?.data?.message))
        console.log(e.response?.data?.message);
    } finally {
        dispatch(setIsLoadingForm(false))
    }

}

export const registration = (registrationData: userModel) => async (dispatch: any) => {
    dispatch(setIsLoadingForm(true))
    try {
        const response = await AuthService.registration(registrationData);
        console.log(response);
        if(response.status === 200) {
            dispatch(setIsEmailSend(true))
            dispatch(setRegistrationError(''))
        }
        localStorage.setItem("token", response.data.accessToken);

        dispatch(setAuth(true));
        dispatch(setUser(response.data.user));
    } catch (e: any) {
        console.log(e.response?.data?.message);
        dispatch(setRegistrationError(e.response?.data?.message))
    } finally {
        dispatch(setIsLoadingForm(false))
    }
    
}

export const logout = () => async (dispatch: any) => {

    try {
        const response = await AuthService.logout();
        console.log(response);
        localStorage.removeItem("token");

        dispatch(setAuth(false));
        dispatch(setUser({} as IUser));
    } catch (e: any) {
        console.log(e.response?.data?.message);
    }
    
}

export const checkAuth = () => async (dispatch: any) => {
    dispatch(setIsLoading(true));
    try {
        const response = await axios.get<AuthResponse>(`${API_URL}/auth/refresh`, {
            withCredentials: true,
        });
        console.log(response);
        localStorage.setItem("token", response.data.accessToken);

        dispatch(setAuth(true));
        dispatch(setUser(response.data.user));
    } catch (e: any) {
        console.log(e.response?.data?.message)
    } finally {
        dispatch(setIsLoading(false))
    }
}

export const selectIsLoading = (state: any) => state.auth.isLoading;
export const selectIsLoadingForm = (state: any) => state.auth.isLoadingForm;
export const selectIsAuth = (state: any) => state.auth.isAuth;
export const selectUser = (state: any) => state.auth.user;
export const selectRegistrationError = (state: any) => state.auth.registrationError;
export const selectLoginError = (state: any) => state.auth.loginError;
export const selectIsEmailSend = (state: any) => state.auth.isEmailSend;

export default authSlice.reducer;