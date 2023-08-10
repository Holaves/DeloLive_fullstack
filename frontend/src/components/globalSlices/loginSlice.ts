import { createSlice , PayloadAction} from "@reduxjs/toolkit";
import userModel from "../../types/UserModel";
import ILogin from "../../types/interfaces/ILogin";

const initialState: ILogin = {
    isState: false,
    sendCounter: 0,

    createUserData: {
        email: '',
        password: ''
    } 
};

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        logined: (state) => {
            state.isState = !state.isState
        },
        setLoginData: (state, action: PayloadAction<Partial<userModel>>) => {
            state.createUserData = { ...state.createUserData, ...action.payload };
        },
        setLoginCounter: (state) => {
            state.sendCounter += 1
        }
    }
})

export const { logined, setLoginData, setLoginCounter } = loginSlice.actions;

export const selectLogin = (state: any) => state.login.isState;
export const selectLoginData = (state: any) => state.login.createUserData;
export const selectLoginCounter = (state: any) => state.login.sendCounter

export default loginSlice.reducer;