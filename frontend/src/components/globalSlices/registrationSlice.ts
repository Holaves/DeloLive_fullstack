import { createSlice , PayloadAction} from "@reduxjs/toolkit";
import createUser from "../../types/createUser";

interface initalStateInterface{
    isValidate: boolean;
    isState: boolean;
    setPassword: string;
    createUserData: createUser;
    isSetPassword: boolean;
}


const initialState: initalStateInterface = {
    isValidate: false,
    isState: false,
    setPassword: '',
    isSetPassword: false,

    createUserData: {
        surname: '',
        name: '',
        fatherName: '',
        telephone: '',
        email: '',
        password: '',
        birthdate: '',
        card: ''
    } 
};

export const registrationSlice = createSlice({
    name: 'registration',
    initialState,
    reducers: {
        validate: (state) => {
            state.isValidate = true
        },
        registrate: (state) => {
            state.isState = !state.isState
        },
        setUserData: (state, action: PayloadAction<Partial<createUser>>) => {
            state.createUserData = { ...state.createUserData, ...action.payload };
        },
        setPasswordUpdate: (state, action: PayloadAction<Partial<string>>) => {
            state.setPassword = action.payload
        },
        setIsSetPassword: (state, action: PayloadAction<Partial<boolean>>) => {
            state.isSetPassword = action.payload
        }
    }
})

export const { registrate, setUserData, setPasswordUpdate, setIsSetPassword, validate } = registrationSlice.actions;

export const selectReg = (state: any) => state.registration.isState;
export const selectValid = (state: any) => state.registration.isValidate;
export const selectUserData = (state: any) => state.registration.createUserData;
export const setPassword = (state: any) => state.registration.setPassword;
export const isSetPassword = (state: any) => state.registration.isSetPassword;

export default registrationSlice.reducer;