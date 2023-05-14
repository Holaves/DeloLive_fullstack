import { createSlice , PayloadAction} from "@reduxjs/toolkit";
import createUser from "../../types/createUser";

interface initalStateInterface{
    isState: boolean;
    createUserData: createUser;
}


const initialState: initalStateInterface = {
    isState: false,
    

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
        registrate: (state) => {
            state.isState = !state.isState
        },
        setUserData: (state, action: PayloadAction<Partial<createUser>>) => {
            state.createUserData = { ...state.createUserData, ...action.payload };
        }
    }
})

export const { registrate, setUserData } = registrationSlice.actions;

export const selectReg = (state: any) => state.registration.isState;
export const selectUserData = (state: any) => state.registration.createUserData;

export default registrationSlice.reducer;