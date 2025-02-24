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
    const playerDiceData = gameSelectors.getDicePlayerNumber();
    const diceNumber = gameSelectors.getDiceNumber();
        
    useEffect(() => {
        // console.log("...sid getting celldata ", cellData);
    }, [cellData])
    
    useEffect(() => {
        // console.log("...sidDDDDDDDDDD getting playerDiceData ", playerDiceData);
    }, [playerDiceData])

    useEffect(() => {
        // console.log("...sid getting diceData ", snakesData);
    }, [snakesData])
    

    return (
        <InnerBoard diceNumber = {diceNumber} diceData = {diceData} snakesData = {snakesData} ladderData = {ladderData} playerDiceData = {playerDiceData}></InnerBoard>
    )
}
export default InnerBoardLinked;