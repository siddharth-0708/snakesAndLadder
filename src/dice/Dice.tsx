import styles from './Dice.module.css';
import { useDispatch } from 'react-redux';
import { snakesAndLadderActions } from '../store/gameSlices';

function Dice(){
    const dispatch = useDispatch();

    function generateRandomNumber(){
        dispatch(snakesAndLadderActions.setDiceData(Math.floor(Math.random() * 6) + 1));
        // return Math.floor(Math.random() * 6) + 1;
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