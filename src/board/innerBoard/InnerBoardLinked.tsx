import { useSelector, useDispatch } from 'react-redux';
import { snakesAndLadderActions } from '../../store/gameSlices';
import InnerBoard from './InnerBoard';
import gameSelectors from '../../store/gameSelectors';

function InnerBoardLinked(){
    const mystate = gameSelectors.getCount();    

    return (
        <>
            <InnerBoard></InnerBoard>
        </>
    )
}
export default InnerBoardLinked;