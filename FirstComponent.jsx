import Board from "./src/board/Board";
import Snakes from "./src/snakes/Snakes";
import Ladder from "./src/ladder/Ladder";
import PreLoader from "./src/preLoader/PreLoader";
import { resources } from "./resources";
import { useEffect, useState } from "react";



function FirstComponent() {
    const [data, setData] = useState(false);
    const [percentage, setPercentage] = useState(0);

    const calculatePercentage = () => {
        return Math.round(((percentage / resources.length) * 100)) + '%';
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
            setTimeout(() => {
                setData(true);
            }, 500);
        }).catch(() => {
            setData(false)
        });
    },[])

    return(
        <>
        {!data && <PreLoader percentage = {calculatePercentage()}></PreLoader>}
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