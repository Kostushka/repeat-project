import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
// import ReactDOM from 'react-dom';
import { state } from './store/state';
import App from './App';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <App state={state} />
        </BrowserRouter>
    </React.StrictMode>
);

// ReactDOMClient.createRoot(
//     <React.StrictMode>
//         <App />
//     </React.StrictMode>,
//     document.getElementById('root')
// );
