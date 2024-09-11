import { createSlice } from "@reduxjs/toolkit";

const calcSlice=createSlice({
    name:'calculator',
    initialState:{
        calculator: '',
        result: null,
    },
    reducers:{
        setCalculator:(state,action)=>{
            state.calculator=action.payload;
        },
        evaluateCalculator:(state)=>{
            state.result=eval(state.calculator);
        },
        clearCalculator:(state)=>{
            state.calculator='';
            state.result=null;
        }
    }
})

export const {setCalculator,evaluateCalculator,clearCalculator} = calcSlice.actions;

export default calcSlice.reducer;