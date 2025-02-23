import { useDispatch } from 'react-redux';
import styles from './InnerBoard.module.css';
import { FC, useCallback, useEffect, useRef, useState } from 'react';
import { snakesAndLadderActions } from '../../store/gameSlices';

type cellProps = {
    element: number;
    onPositionFetched: (element: number, top: number, left: number) => void;
    resizeTrigger: number;
};

type mapping = {
    [key: number] : number;
}

function InnerBoard({ diceData, snakesData, ladderData, playerDiceData }: { diceData: mapping, snakesData : mapping, ladderData: mapping, playerDiceData: number}) {
    const [elementsArray, setElementsArray] = useState<number[]>([]);
    const positions = useRef<{ element: number; top: number; left: number }[]>([]);
    const iconRef = useRef<HTMLDivElement>(null);
    const multipleIconRef = useRef<HTMLDivElement[]>([]);
    const [resizeTrigger, setResizeTrigger] = useState(0);
    const dispatch = useDispatch();

    useEffect(() => {
        const array = [];
        for (let i = 1; i <= 100; i++) {
            array.push(i);
        }
        setElementsArray(array);
    }, []);

    useEffect(()=>{
        if(positions.current.length > 0) {
            multipleIconRef.current[playerDiceData - 1]?.style.setProperty('--diceMoveX', positions.current[diceData[playerDiceData] - 1].left + 'px');
            multipleIconRef.current[playerDiceData - 1]?.style.setProperty('--diceMoveY', positions.current[diceData[playerDiceData] - 1].top + 'px');

        if(snakesData[diceData[playerDiceData]]){
            setTimeout(() => {
                dispatch(snakesAndLadderActions.setSnakeBiteOrLadderClimb({playerNumber: playerDiceData, finalNumber: snakesData[diceData[playerDiceData]]}));
            }, 500);
        } else if(ladderData[diceData[playerDiceData]]){
            setTimeout(() => {
                dispatch(snakesAndLadderActions.setSnakeBiteOrLadderClimb({playerNumber: playerDiceData, finalNumber: ladderData[diceData[playerDiceData]]}));
            }, 500);
        }
        if( playerDiceData + 1 > 4){
            dispatch(snakesAndLadderActions.setDicePlayerNumber(1));
        }else{
            dispatch(snakesAndLadderActions.setDicePlayerNumber(playerDiceData + 1));
        }
        }
    },[diceData, positions.current.length]);

    const handlePositionFetched = (element: number, top: number, left: number) => {
        positions.current.push({ element: element, top: top, left: left });
        
        if (positions.current.length === 100) {            
            dispatch(snakesAndLadderActions.setCellData(positions.current));
        }
    };

    const handleResize = useCallback(() => {
        positions.current = [];        
        setResizeTrigger((prev) => prev + 1);
    },[]);

    useEffect(() => {

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className={styles.innerParent}>
            {elementsArray.map((ele) => (
                <Cell key={ele} element={ele} resizeTrigger={resizeTrigger} onPositionFetched={handlePositionFetched} />
            ))}
            {[1,2,3,4].map((element, index) => (
                <div key={element} ref={(ele : HTMLDivElement)=> {multipleIconRef.current[index] = ele}} className={styles.icon}>icon{index}</div>))}
            <div className={styles.snake}></div>
        </div>
    );
}
export default InnerBoard;

export const Cell: FC<cellProps> = ({ element, onPositionFetched, resizeTrigger }) => {
    const cellRef = useRef<HTMLDivElement>(null);    

    useEffect(() => {
        if (cellRef.current) {
            const top = cellRef.current.offsetTop;
            const left = cellRef.current.offsetLeft;
            onPositionFetched(element, top, left);
        }
    }, [cellRef, element, resizeTrigger]);

    return (
        <div ref={cellRef} className={styles.cell} style={{ gridArea: `cell${element}` }}>
            {element}
        </div>
    );
};
