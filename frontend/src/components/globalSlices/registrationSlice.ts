import { createSlice , PayloadAction} from "@reduxjs/toolkit";
import userModel from "../../types/UserModel";
import IRegistration from "../../types/interfaces/IRegistration";


const initialState: IRegistration = {
    isValidate: false,
    isState: false,
    setPassword: '',
    isSetPassword: false,
    sendCounter: 0,

    createUserData: {
        surname: '',
        name: '',
        fatherName: '',
        telephone: '',
        email: '',
        password: '',
        birthdate: '',
        isMailing: false,
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
        setUserData: (state, action: PayloadAction<Partial<userModel>>) => {
            state.createUserData = { ...state.createUserData, ...action.payload };
        },
        setPasswordUpdate: (state, action: PayloadAction<Partial<string>>) => {
            state.setPassword = action.payload
        },
        setIsSetPassword: (state, action: PayloadAction<Partial<boolean>>) => {
            state.isSetPassword = action.payload
        },
        setSendCounter: (state) => {
            state.sendCounter += 1
        }
    }
})

export const { registrate, setUserData, setPasswordUpdate, setIsSetPassword, validate, setSendCounter } = registrationSlice.actions;

export const selectReg = (state: any) => state.registration.isState;
export const selectValid = (state: any) => state.registration.isValidate;
export const selectUserData = (state: any) => state.registration.createUserData;
export const setPassword = (state: any) => state.registration.setPassword;
export const isSetPassword = (state: any) => state.registration.isSetPassword;
export const selectSendCounter = (state: any) => state.registration.sendCounter

export default registrationSlice.reducer;