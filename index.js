import sid from "./dummy.js";
import ReactDOM from 'react-dom/client';
import FirstComponent from "./FirstComponent";

console.log(sid());
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<FirstComponent />);

