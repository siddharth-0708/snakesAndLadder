import sid from "./dummy.js";
import ReactDOM from 'react-dom/client';
import FirstComponent from "./FirstComponent";
import { data } from "autoprefixer";

console.log(sid());
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<FirstComponent />);