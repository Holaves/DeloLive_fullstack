import { configureStore } from '@reduxjs/toolkit';
import windowWidthReducer from '../components/globalSlices/windowWidthSlice'
import scrollReducer from '../components/globalSlices/scroll'
import registrationReducer from '../components/globalSlices/registrationSlice'
import authReducer from '../components/globalSlices/authSlice';
import loginReducer from '../components/globalSlices/loginSlice';

export const store = configureStore({
    reducer: {
        windowWidth: windowWidthReducer,
        scroll: scrollReducer,
        registration: registrationReducer,
        auth: authReducer,
        login: loginReducer
    }
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
