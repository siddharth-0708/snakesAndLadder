import Board from "./src/board/Board";
import Snakes from "./src/snakes/Snakes";
import Ladder from "./src/ladder/Ladder";

const createPreloadLinkElement = (resource) => {
    const link = document.createElement('link');
    link.as = resource.kind;
    link.crossOrigin = '';
    link.href = resource.url;
    link.rel ='preload';

    return link;
}
const schedulePreload = (resources) =>{
    resources.forEach((resource) => {
        const link = createPreloadLinkElement(resource);
        document.head.appendChild(link);
    });
}
function FirstComponent(){
    return (
        <div>
            <h1>Hello World!</h1>
            <Ladder></Ladder>
            <Board></Board>
            <Snakes></Snakes>
        </div>
    )
}
export default FirstComponent;

//Resources

//1. import winResultImage from '../components/winresult/assets/winlabel/texture.png' what are webpack configuarations for this? why we use?
//WIN_MESSAGE : {url: winresultImage, priority: '2 or 3 or block', kind: 'image or font'}
//2. DATA: {url: './assets/winIcons/data.png', priority: '2 or 3 or block', kind: 'image or font'}