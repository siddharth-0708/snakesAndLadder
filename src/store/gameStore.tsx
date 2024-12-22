import { configureStore } from "@reduxjs/toolkit";
import { snakesAndLadderReducers } from "./gameSlices";

export const store = configureStore(
    {
        reducer : snakesAndLadderReducers
    }
);