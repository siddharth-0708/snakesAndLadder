import Board from "./src/board/Board";
import Snakes from "./src/snakes/Snakes";
import Ladder from "./src/ladder/Ladder";
import { resources } from "./resources";
import { useEffect, useState } from "react";



function FirstComponent() {
    const [data, setData] = useState(false);
    const [percentage, setPercentage] = useState(0);

    const calculatePercentage = () => {
        return ((percentage / resources.length) * 100) + '%';
    }

    const createPreloadLinkElement = (resource) => {
        const link = document.createElement('link');
        link.as = resource.kind;
        link.crossOrigin = '';
        link.href = resource.url;
        link.rel = 'preload';

        return link;
    }
    const schedulePreload = (resources) => {
        const promises = resources.map((resource,index) => {
            return new Promise((resolve, reject) => {
                const link = createPreloadLinkElement(resource);
                document.head.appendChild(link);
                link.onload = () => {
                    setTimeout(() => {
                        setPercentage((data)=> data + 1);
                        resolve();    
                    }, index * 1000);
                } 
                link.onerror = () => reject();
            })
        });
        return Promise.all(promises);
    }
    useEffect(()=>{
        schedulePreload(resources).then(() => {
            // setTimeout(() => {
                setData(true);
            // }, 3000);
        }).catch(() => {
            setData(false)
        });
    },[])

    return(
        <>
        <div> loading........ {calculatePercentage()}</div>
        {data ? (
            <div>
                <h1>Hello World!</h1>
                <Ladder></Ladder>
                <Board></Board>
                <Snakes></Snakes>
            </div>
        ) : null}
        </>
    ) 
}
export default FirstComponent;

//Resources

//1. import winResultImage from '../components/winresult/assets/winlabel/texture.png' what are webpack configuarations for this? why we use?
//WIN_MESSAGE : {url: winresultImage, priority: '2 or 3 or block', kind: 'image or font'}
//2. DATA: {url: './assets/winIcons/data.png', priority: '2 or 3 or block', kind: 'image or font'}