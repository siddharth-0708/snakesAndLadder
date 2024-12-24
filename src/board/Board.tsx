import InnerBoardLinked from './innerBoard/InnerBoardLinked';
import styles from './Board.module.css';

function Board(){
    return (
        <div className={styles.parentBoard}>
            <InnerBoardLinked></InnerBoardLinked>
        </div>
    )
}
export default Board;