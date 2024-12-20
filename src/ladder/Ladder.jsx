import styles from './Ladder.module.css';
import { useSelector, useDispatch } from 'react-redux';

function Ladder(){
    const mystate = useSelector((state)=> state);
    console.log("... render");
    
    const dispatch = useDispatch();
    function clicked() {
        dispatch({type: 'INCREMENT'});
    }
    return (
        <div>
            <div onClick={clicked} className= {styles.ladder}>Ladder!</div>
            <div> count is {mystate.count}</div>
            {/* <div> count is {mystate.two.count}</div> */}
        </div>
    )
}
export default Ladder;