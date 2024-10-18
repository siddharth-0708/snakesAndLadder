import Board from "./src/board/Board";
import Snakes from "./src/snakes/Snakes";
import Ladder from "./src/ladder/Ladder";
function FirstComponent(){
    return (
        <div>
            <h1>Hello World!</h1>
            <Ladder></Ladder>
            {/* <Board></Board> */}
            {/* <Snakes></Snakes> */}
        </div>
    )
}
export default FirstComponent;