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
    diceData: { [key: number]: number };
    snakesMapping : { [key: number]: number};
    ladderMapping : { [key: number]: number};
    dicePlayerNumber : number;
    diceNumber : number;
}

const initialState: gameStateTypeProps = {
    count: 0,
    cellsData: [],
    diceData: { 1: 1, 2: 1, 3:1, 4: 1 },
    snakesMapping: { 55: 18, 99: 38, 33: 15, 84: 18, 91: 49, 63: 27},
    ladderMapping : { 24: 59, 5: 47, 50: 70, 67: 97},
    dicePlayerNumber : 0,
    diceNumber: 0,
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
                const playerData = {...state.diceData};
                let finalNumber = playerData[actions.payload.playerNumber] + actions.payload.diceNumber;
                if(finalNumber <= 100){
                    playerData[actions.payload.playerNumber] = playerData[actions.payload.playerNumber] + actions.payload.diceNumber;
                    state.diceData = {...playerData};
                }
                // if( state.dicePlayerNumber + 1 > 4){
                //     state.dicePlayerNumber = 1;
                // }else{
                //     state.dicePlayerNumber = state.dicePlayerNumber + 1;
                // }
                // if(actions.payload.diceNumber !== 6){
                //     if( state.dicePlayerNumber + 1 > 4){
                //         state.dicePlayerNumber = 1;
                //     }else{
                //         state.dicePlayerNumber = state.dicePlayerNumber + 1;
                //     }
                // }
            },
            setSnakesMapping(state, actions){
                state.snakesMapping = {...actions.payload.snakesMapping};
            },
            setSnakeBiteOrLadderClimb(state, actions){
                const playerData = {...state.diceData};
                playerData[actions.payload.playerNumber] = actions.payload.finalNumber;
                state.diceData = {...playerData};
            },
            setDicePlayerNumber(state, actions){
                state.dicePlayerNumber = actions.payload;
            },
            setDiceNumber(state, actions){
                state.diceNumber = actions.payload;
            }
        },
    }
);
export const snakesAndLadderActions = snakesAndLadderSlice.actions;
export const snakesAndLadderReducers = snakesAndLadderSlice.reducer;