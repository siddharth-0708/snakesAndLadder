// import './Board.css';
import styles  from './Board.module.css';
// import loaderImage from './assets/board.jpeg'

// console.log("image is ", loaderImage);


console.log("haha", styles)
function Board(){
    return (
        <div>
            <div className={styles.boardClass}>Board!</div>
        </div>
    )
}
export default Board;