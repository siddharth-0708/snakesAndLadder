import styles from './Dice.module.css';
import { useDispatch } from 'react-redux';
import { snakesAndLadderActions } from '../store/gameSlices';

function Dice(){
    const dispatch = useDispatch();

    function generateRandomNumber(){
        const randomNumber = Math.floor(Math.random() * 6) + 1;
        console.log("...random number: ", randomNumber);
        
        dispatch(snakesAndLadderActions.setDiceData({playerNumber: 1, diceNumber: randomNumber}));
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