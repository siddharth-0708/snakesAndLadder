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
    diceData: number;
}

const initialState: gameStateTypeProps = {
    count: 0,
    cellsData: [],
    diceData: 0
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
                const cellData = [...state.cellsData];
                cellData[actions.payload['element'] - 1] = {element: actions.payload['element'] - 1, top: actions.payload.top, left: actions.payload.left};
                state.cellsData = [...cellData];
            },
            setDiceData(state, actions){
                state.diceData = actions.payload;
            }
        },
    }
);
export const snakesAndLadderActions = snakesAndLadderSlice.actions;
export const snakesAndLadderReducers = snakesAndLadderSlice.reducer;