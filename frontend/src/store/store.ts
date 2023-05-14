import { configureStore } from '@reduxjs/toolkit';
import windowWidthReducer from '../components/globalSlices/windowWidthSlice'
import scrollReducer from '../components/globalSlices/scroll'
import registrationReducer from '../components/globalSlices/registrationSlice'

export const store = configureStore({
    reducer: {
        windowWidth: windowWidthReducer,
        scroll: scrollReducer,
        registration: registrationReducer
    }
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
