import styles from './Dice.module.css';
import { useDispatch } from 'react-redux';
import { snakesAndLadderActions } from '../store/gameSlices';
import gameSelectors from '../store/gameSelectors';
function Dice(){
    const dispatch = useDispatch();
    const playerDiceData = gameSelectors.getDicePlayerNumber();

    function generateRandomNumber(){
        const randomNumber = Math.floor(Math.random() * 6) + 1;
        console.log("...sid random number: ", randomNumber);
                
        dispatch(snakesAndLadderActions.setDiceNumber(randomNumber));
        dispatch(snakesAndLadderActions.setDiceData({playerNumber: playerDiceData, diceNumber: randomNumber}));
    }
    function rollDice(){
        generateRandomNumber();
    }
    return (
        <div className={styles.diceParent}>
            <div>dice</div>
            <button onClick={rollDice}>roll dice</button>
        </div>
    )
}
export default Dice;