import styles from "./Dice.module.css";
import { useDispatch } from "react-redux";
import { snakesAndLadderActions } from "../store/gameSlices";
import gameSelectors from "../store/gameSelectors";
import { useRef, useEffect } from "react";
import Lottie from 'lottie-web';
import data from './lottie.json';
import data1 from './data.json';

function Dice() {
  const dispatch = useDispatch();
  const playerDiceData = gameSelectors.getDicePlayerNumber();
  const diceParentRef = useRef<HTMLDivElement>(null);
  const previousDice = useRef<number>(0);
  const previousClassLength = useRef<number>(5);

  const sides = 6;
  const dotsMap: Record<number, string[]> = {
    1: ["one1"],
    2: ["two1", "two2"],
    3: ["three1", "three2", "three3"],
    4: ["four1", "four2", "four3", "four4"],
    5: ["five1", "five2", "five3", "five4", "five5"],
    6: ["six1", "six2", "six3", "six4", "six5", "six6"],
  };

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
  const lottieRef = useRef<HTMLDivElement>(null); 
  const lottieRef1 = useRef<HTMLDivElement>(null); 
  useEffect(()=>{
      if(!lottieRef.current || !lottieRef1.current){
          return;
      }
      let anim = Lottie.loadAnimation({
          container: lottieRef.current,
          renderer: 'svg',
          loop: true,
          animationData: data
        });
        let anim1= Lottie.loadAnimation({
          container: lottieRef1.current,
          renderer: 'svg',
          loop: true,
          animationData: data1
        });
        return()=> anim.destroy();
  },[]);

  return (
    <>
    <div ref = {lottieRef} className={styles.lottie}></div>
    <div ref = {lottieRef1} className={styles.lottie1}></div>
    <div onClick={rollDice} className={styles.diceParent}>
      <div ref={diceParentRef} className={styles.dice + " " + styles.diceone}>
      {[...Array(sides)].map((_, i) => (
          <div key={i} className={`${styles.side} ${styles[`side${i + 1}`]}`}>
            {dotsMap[i + 1].map((dot) => (
              <div key={dot} className={`${styles.dot} ${styles[dot]}`}></div>
            ))}
          </div>
        ))}
      </div>
    </div>
    </>    
    );
}
export default Dice;
