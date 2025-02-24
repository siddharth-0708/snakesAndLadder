import { useSelector } from "react-redux";
import { gameStateTypeProps } from "./gameSlices";
import { RootState } from "./gameStore";

const gameSelectors = {
    getCount: (): gameStateTypeProps['count']=>{
        return useSelector(({gameState}: RootState)=> gameState.count);
    },
    getCellData: (): gameStateTypeProps['cellsData']=>{
        return useSelector(({gameState}: RootState)=> gameState.cellsData);
    },
    getDiceData: (): gameStateTypeProps['diceData']=>{
        return useSelector(({gameState}: RootState)=> gameState.diceData);
    },
    getSnakesMapping: (): gameStateTypeProps['snakesMapping']=>{
        return useSelector(({gameState}: RootState)=> gameState.snakesMapping);
    },
    getLadderMapping: (): gameStateTypeProps['ladderMapping']=>{
        return useSelector(({gameState}: RootState)=> gameState.ladderMapping);
    },
    getDicePlayerNumber: (): gameStateTypeProps['dicePlayerNumber']=>{
        return useSelector(({gameState}: RootState)=> gameState.dicePlayerNumber);
    },
    getDiceNumber: (): gameStateTypeProps['diceNumber']=>{
        return useSelector(({gameState}: RootState)=> gameState.diceNumber);
    }
}
export default gameSelectors;