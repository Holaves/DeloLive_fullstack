import { createSlice } from "@reduxjs/toolkit";

// w1 === 1440-1000; w2 === 1000-768; w3 === 768-480; w4 === 480-320; w5 === > 320    <<============ height too

export const TriggerWH = [
    ///////////////////
    {name: 'защита', 
        width:
        {
            w1: 130, w2: 100,
            w3: 58, w4: 58,
            w5: 58
        },
        height :
        {
            h1: 157, h2: 121,
            h4: 70, h3: 70,
            h5: 70
        }
    },
    ///////////////////
    {name: 'твоё Будущее',
        width:
        {
            w1: 158, w2: 116,
            w3: 60, w4: 60,
            w5: 60
        },
        height :
        {
            h1: 158, h2: 116,
            h4: 60, h3: 60,
            h5: 60
        }
    },
    ///////////////////
    {name: 'Бизнес предложения',

        width:
        {
            w1: 187, w2: 118,
            w3: 65 , w4: 65,
            w5: 65
        },
        height :
        {
            h1: 157, h2: 99,
            h4: 49, h3: 49,
            h5: 49
        }
    },
]

export const InsuranceWH = [
    ///////////////////
    {name: '«Здоровье»', 
        width:
        {
            w1: 181, w2: 78,
            w3: 78, w4: 112,
            w5: 36
        },
        height :
        {
            h1: 153, h2: 68,
            h3: 68, h4: 98,
            h5: 32
        }
    },
    ///////////////////
    {name: 'ДМС',
        width:
        {
            w1: 181, w2: 65,
            w3: 65, w4: 110,
            w5: 37
        },
        height :
        {
            h1: 183, h2: 66,
            h3: 66, h4: 112,
            h5: 38
        }
    },
]

const initialState = {
    value: 0,
    status: 'idle',
};

export const widnowWidthSlice = createSlice({
    name: 'windowWidth',
    initialState,
    reducers: {
        resize: (state) => {
            state.value = window.innerWidth
        }
    }
})

export const { resize } = widnowWidthSlice.actions;

export const selectWidth = (state: any) => state.windowWidth.value;

export default widnowWidthSlice.reducer;