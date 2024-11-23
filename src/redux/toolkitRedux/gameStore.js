import { configureStore } from "@reduxjs/toolkit";
import { reducer1 } from "./reducer";

export const store = configureStore({
    // reducer: {one: reducer1.reducer}
    reducer: reducer1.reducer
});