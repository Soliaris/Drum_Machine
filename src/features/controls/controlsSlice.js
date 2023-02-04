import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    power: false,
    bank: 'heater',
    display: '',
    volume: 0.45
}

const controlsSlice = createSlice({
    name: 'controls',
    initialState,
    reducers: {
        powerSwitch: (state,action) => {
            state.power = action.payload
        },
        bankSwitch: (state,action) => {
            state.bank = action.payload
        },
        displaySet: (state,action) => {
            state.display = action.payload
        },
        volumeSet: (state,action) => {
            state.volume = action.payload
        }
    }
});

export const {powerSwitch,bankSwitch,displaySet,volumeSet} = controlsSlice.actions

export default controlsSlice.reducer