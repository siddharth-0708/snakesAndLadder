import styles from "./Dice.module.css";
import { useDispatch } from "react-redux";
import { snakesAndLadderActions } from "../store/gameSlices";
import gameSelectors from "../store/gameSelectors";
import { useRef } from "react";
function Dice() {
  const dispatch = useDispatch();
  const playerDiceData = gameSelectors.getDicePlayerNumber();
  const diceParentRef = useRef<HTMLDivElement>(null);
  const previousDice = useRef<number>(0);
  const previousClassLength = useRef<number>(5);

  function generateRandomNumber() {
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    console.log("...sid random number: ", randomNumber);
    playDiceAnimation(randomNumber);
    dispatch(snakesAndLadderActions.setDiceNumber(randomNumber));
    dispatch(
      snakesAndLadderActions.setDiceData({
        playerNumber: playerDiceData,
        diceNumber: randomNumber,
      })
    );
  }
  function rollDice() { 
    generateRandomNumber();
  }
  function playDiceAnimation(value: number) {
    console.log("...sid random number in dice animation is ", value);

    for (let i = 1; i <= 6; i++) {
      diceParentRef.current?.classList.remove(styles["show" + i]);
      diceParentRef.current?.classList.remove(styles["show10" + i]);

      if (value === i) {
        if (previousDice.current === value) {
          if (previousClassLength.current === 5) {
            diceParentRef.current?.classList.add(styles["show10" + i]);
            previousClassLength.current = 7;
          } else {
            diceParentRef.current?.classList.add(styles["show" + i]);
            previousClassLength.current = 5;
          }
        } else {
          diceParentRef.current?.classList.add(styles["show" + i]);
          previousClassLength.current = 5;
        }
      }
    }
    previousDice.current = value;
  }
  return (
    <div className={styles.diceParent}>
      <div ref={diceParentRef} className={styles.dice + " " + styles.diceone}>
        <div className={styles.side + " " + styles.one}>
          <div className={styles.dot + " " + styles.one1}></div>
        </div>
        <div className={styles.side + " " + styles.two}>
          <div className={styles.dot + " " + styles.two1}></div>
          <div className={styles.dot + " " + styles.two2}></div>
        </div>
        <div className={styles.side + " " + styles.three}>
          <div className={styles.dot + " " + styles.three1}></div>
          <div className={styles.dot + " " + styles.three2}></div>
          <div className={styles.dot + " " + styles.three3}></div>
        </div>
        <div className={styles.side + " " + styles.four}>
          <div className={styles.dot + " " + styles.four1}></div>
          <div className={styles.dot + " " + styles.four2}></div>
          <div className={styles.dot + " " + styles.four3}></div>
          <div className={styles.dot + " " + styles.four4}></div>
        </div>
        <div className={styles.side + " " + styles.five}>
          <div className={styles.dot + " " + styles.five1}></div>
          <div className={styles.dot + " " + styles.five2}></div>
          <div className={styles.dot + " " + styles.five3}></div>
          <div className={styles.dot + " " + styles.five4}></div>
          <div className={styles.dot + " " + styles.five5}></div>
        </div>
        <div className={styles.side + " " + styles.six}>
          <div className={styles.dot + " " + styles.six1}></div>
          <div className={styles.dot + " " + styles.six2}></div>
          <div className={styles.dot + " " + styles.six3}></div>
          <div className={styles.dot + " " + styles.six4}></div>
          <div className={styles.dot + " " + styles.six5}></div>
          <div className={styles.dot + " " + styles.six6}></div>
        </div>
      </div>
      <div>dice</div>
      <button onClick={rollDice}>roll dice</button>
    </div>
  );
}
export default Dice;
