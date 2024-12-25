import { useSelector } from "react-redux";
import { gameStateTypeProps } from "./gameSlices";
import { RootState } from "./gameStore";

const gameSelectors = {
    getCount: (): gameStateTypeProps['count']=>{
        return useSelector(({gameState}: RootState)=> gameState.count);
    },
    getCellData: (): gameStateTypeProps['cellsData']=>{
        return useSelector(({gameState}: RootState)=> gameState.cellsData);
    }
}
export default gameSelectors;