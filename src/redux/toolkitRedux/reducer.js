import { createSlice } from "@reduxjs/toolkit";

export const reducer1 = createSlice(
    {
        name: 'counter1',
        initialState : {count: 0},
        reducers: {
            increment: (state, actions)=>{
                state.count++;
            }
        }
    }
);