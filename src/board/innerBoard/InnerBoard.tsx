import styles from './InnerBoard.module.css';
import { useEffect, useRef, useState } from 'react';

function InnerBoard(){
    const [elementsArray, setElementsArray] = useState<number[]>([]);

    useEffect(()=>{
        const array = [];
        for (let i = 1; i <= 100; i++) {
            array.push(i);
        }
        setElementsArray(array);
    }, []);
    return (
            <div className={styles.innerParent}>
                {elementsArray?.map(
                    (ele) => <div className= {styles.cell} style={{ gridArea: `cell${ele}` }} key={ele}> {ele}</div>)
                }
            </div>
    )
}
export default InnerBoard;