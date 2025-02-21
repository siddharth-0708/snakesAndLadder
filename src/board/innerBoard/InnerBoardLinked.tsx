import { useSelector, useDispatch } from 'react-redux';
import { snakesAndLadderActions } from '../../store/gameSlices';
import InnerBoard from './InnerBoard';
import gameSelectors from '../../store/gameSelectors';
import { useEffect } from 'react';

function InnerBoardLinked(){
    const cellData = gameSelectors.getCellData();
    const diceData = gameSelectors.getDiceData();
    const snakesData = gameSelectors.getSnakesMapping();
    const ladderData = gameSelectors.getLadderMapping();
        
    useEffect(() => {
        console.log("...sid getting celldata ", cellData);
    }, [cellData])
    
    useEffect(() => {
        console.log("...sid getting diceData ", diceData);
    }, [diceData])

    useEffect(() => {
        console.log("...sid getting diceData ", snakesData);
    }, [snakesData])
    

    return (
        <InnerBoard diceData = {diceData} snakesData = {snakesData} ladderData = {ladderData}></InnerBoard>
    )
}
export default InnerBoardLinked;