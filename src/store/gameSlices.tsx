import { createSlice } from "@reduxjs/toolkit";

const snakesAndLadderSlice = createSlice(
    {
        name: "snakesAndLadder",
        initialState: {
            count: 0,
            // two: { count: 0 },
        },
        reducers: {
            increment(state) {
                state.count += 1;
                // state.two.count += 1;
            },
            // decrement(state) {
            //     state.count -= 1;
            //     state.two.count -= 1;
            // },
        },
    }
);
export const snakesAndLadderActions = snakesAndLadderSlice.actions;
export const snakesAndLadderReducers = snakesAndLadderSlice.reducer;