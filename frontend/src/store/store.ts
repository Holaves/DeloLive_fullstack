import { configureStore } from '@reduxjs/toolkit';
import windowWidthReducer from '../components/globalSlices/windowWidthSlice'
import scrollReducer from '../components/globalSlices/scroll'


export const store = configureStore({
    reducer: {
        windowWidth: windowWidthReducer,
        scroll: scrollReducer
    }
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
