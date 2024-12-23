import { configureStore, Store } from "@reduxjs/toolkit";
import { snakesAndLadderReducers } from "./gameSlices";

export const store = configureStore(
    {
        reducer : {
          gameState:  snakesAndLadderReducers
        }
    }
);
export type RootState = ReturnType<typeof store.getState>;