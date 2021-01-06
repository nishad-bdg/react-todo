import { createSlice } from '@reduxjs/toolkit'


export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0,
    },

    reducers: {
        increament: state => {
            state.value += 1;
        },
        decreament: state => {
            state.value -= 1;
        },
        increamentByAmount: (state, action) => {
            state.value += action.payload
        },
    }
});

export const { increament, decreament, increamentByAmount } = counterSlice.actions;

export const increamentAsync = amount => dispatch => {
    setTimeout(() => {
        dispatch(increamentByAmount(amount), 1000);
    });

}

export const selectCount = state => state.counter.value;

export default counterSlice.reducer;