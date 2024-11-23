// import './Board.css';
import styles  from './Board.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { reducer1 } from '../redux/toolkitRedux/reducer';
// import loaderImage from './assets/board.jpeg'

// console.log("image is ", loaderImage);

console.log("haha", styles)
function Board(){
    const dispatch = useDispatch();
    const mystate = useSelector((state)=> state.count);
    console.log("...state is ", mystate);
    

    function clicked() {
        console.log("clickeedddd");
        
        dispatch(reducer1.actions.increment());
    }

    return (
        <div>
            <div onClick={clicked} className={styles.boardClass}>Board!</div>
            <div>board count is {mystate}</div>
        </div>
    )
}
export default Board;