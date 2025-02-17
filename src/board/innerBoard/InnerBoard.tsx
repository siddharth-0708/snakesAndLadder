import { useDispatch } from 'react-redux';
import styles from './InnerBoard.module.css';
import { FC, useCallback, useEffect, useRef, useState } from 'react';
import { snakesAndLadderActions } from '../../store/gameSlices';

type cellProps = {
    element: number;
    onPositionFetched: (element: number, top: number, left: number) => void;
    resizeTrigger: number;
};

function InnerBoard({ diceData }: { diceData: number }) {
    const [elementsArray, setElementsArray] = useState<number[]>([]);
    const positions = useRef<{ element: number; top: number; left: number }[]>([]);
    const iconRef = useRef<HTMLDivElement>(null);
    const diceTotalCount = useRef<number>(0);
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
        diceTotalCount.current = diceTotalCount.current + diceData + 1;
        const diceNum = diceTotalCount.current;
        const diceString: string = diceNum.toString();
        iconRef.current?.style.setProperty('--diceMoveX', positions.current[diceString].left + 'px');
        iconRef.current?.style.setProperty('--diceMoveY', positions.current[diceString].top + 'px');
        }
    },[diceData]);

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
            <div ref={iconRef} className={styles.icon}>icon</div>
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
