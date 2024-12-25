import { createSlice } from "@reduxjs/toolkit";
import { ReactElement } from "react";

type cellsDataProps = {
    element: number,
    top: number,
    left: number,
    highlight?: boolean,
}
export interface gameStateTypeProps {
    count: number;
    cellsData: cellsDataProps[],
}

const initialState: gameStateTypeProps = {
    count: 0,
    cellsData: [],
};

const snakesAndLadderSlice = createSlice(
    {
        name: "snakesAndLadder",
        initialState: initialState,
        reducers: {
            increment(state) {
                state.count += 1;
            },
            setCellData(state, actions){
                state.cellsData = [...actions.payload];
            },
            updateCellData(state, actions){
                console.log("...sid updating cell");
                
                const cellData = state.cellsData;
                cellData[0] = {element: 0, top: -100, left: -100};
                state.cellsData = [...cellData];
            }
        },
    }
);
export const snakesAndLadderActions = snakesAndLadderSlice.actions;
export const snakesAndLadderReducers = snakesAndLadderSlice.reducer;