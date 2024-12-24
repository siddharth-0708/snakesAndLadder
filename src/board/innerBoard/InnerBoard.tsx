import styles from './InnerBoard.module.css';
import { FC, useEffect, useRef, useState } from 'react';

type cellProps = {
    element: number;
}
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
                    (ele) => <Cell element = {ele} key={ele}/>)
                }
            <div className={styles.icon}>icon</div>    
            </div>
    )
}
export default InnerBoard;

export const Cell: FC<cellProps> = ({element}) => {
    const cellRef = useRef<HTMLDivElement>(null);

    useEffect(()=>{
        if(cellRef.current){
            console.log("...bottom is ", element, " ", cellRef.current.getBoundingClientRect().bottom);
            console.log("...bottom is offset top", element, " ", cellRef.current.offsetTop);
            console.log("...bottom is offset left", element, " ", cellRef.current.offsetLeft);
        }
    }, [cellRef]);
    return (
        <div ref = {cellRef} className= {styles.cell} style={{ gridArea: `cell${element}` }}> {element}</div>
    )
}