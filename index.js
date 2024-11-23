import sid from "./dummy.js";
import ReactDOM from 'react-dom/client';
import FirstComponent from "./FirstComponent";
import { Provider } from "react-redux";
import { oldStore } from "./src/redux/basicRedux/gameStore.js";
import { store } from "./src/redux/toolkitRedux/gameStore.js";

console.log(sid());
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <FirstComponent />
    </Provider>
);