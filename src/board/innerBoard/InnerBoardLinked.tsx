import { useSelector, useDispatch } from 'react-redux';
import { snakesAndLadderActions } from '../../store/gameSlices';
import InnerBoard from './InnerBoard';
import gameSelectors from '../../store/gameSelectors';
import { useEffect } from 'react';

function InnerBoardLinked(){
    const cellData = gameSelectors.getCellData();

    useEffect(() => {
        console.log("...sid getting celldata ", cellData);
    }, [cellData])    

    return (
        <>
            <InnerBoard></InnerBoard>
        </>
    )
}
export default InnerBoardLinked;