import { useDispatch } from 'react-redux';
import styles from './InnerBoard.module.css';
import { FC, useEffect, useRef, useState } from 'react';
import { snakesAndLadderActions } from '../../store/gameSlices';

type cellProps = {
    element: number;
    onPositionFetched: (element: number, top: number, left: number) => void;
};

function InnerBoard() {
    const [elementsArray, setElementsArray] = useState<number[]>([]);
    const positions = useRef<{ element: number; top: number; left: number }[]>([]);
    const dispatch = useDispatch();

    useEffect(() => {
        const array = [];
        for (let i = 1; i <= 100; i++) {
            array.push(i);
        }
        setElementsArray(array);
    }, []);

    const handlePositionFetched = (element: number, top: number, left: number) => {
        positions.current.push({ element: element, top: top, left: left });
        
        if (positions.current.length === 100) {
            dispatch(snakesAndLadderActions.setCellData(positions.current));
        }
    };

    return (
        <div className={styles.innerParent}>
            {elementsArray.map((ele) => (
                <Cell key={ele} element={ele} onPositionFetched={handlePositionFetched} />
            ))}
            <div className={styles.icon}>icon</div>
        </div>
    );
}
export default InnerBoard;

export const Cell: FC<cellProps> = ({ element, onPositionFetched }) => {
    const cellRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (cellRef.current) {
            const top = cellRef.current.offsetTop;
            const left = cellRef.current.offsetLeft;
            onPositionFetched(element, top, left);
        }
    }, [cellRef, element]);

    const debouncedResizeHandler = ()=>{        
        snakesAndLadderActions.updateCellData({element: element, data: {element: element, top: cellRef.current?.offsetTop, left: cellRef.current?.offsetLeft}});
    }
    useEffect(() => {
    
        window.addEventListener('resize', debouncedResizeHandler);

        return () => {
            window.removeEventListener('resize', debouncedResizeHandler);
        };
    }, []);

    return (
        <div ref={cellRef} className={styles.cell} style={{ gridArea: `cell${element}` }}>
            {element}
        </div>
    );
};
