import { useSelector } from "react-redux";
import { gameStateTypeProps } from "./gameSlices";
import { RootState } from "./gameStore";

const gameSelectors = {
    getCount: (): gameStateTypeProps['count']=>{
        return useSelector(({gameState}: RootState)=> gameState.count);
    }
}
export default gameSelectors;