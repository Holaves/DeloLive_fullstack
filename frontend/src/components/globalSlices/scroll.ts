import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 0,
    status: 'idle',
};

export const scrollSlice = createSlice({
    name: 'scroll',
    initialState,
    reducers: {
        scrolling: (state) => {
            state.value = window.pageYOffset as number
        }
    }
})

export const { scrolling } = scrollSlice.actions;

export const selectScroll = (state: any) => state.scroll.value;

export default scrollSlice.reducer;