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
    }
}
export default gameSelectors;