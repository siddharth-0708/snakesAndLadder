import styles from './Dice.module.css';

function Dice(){
    function generateRandomNumber(){
        return Math.floor(Math.random() * 6) + 1;
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