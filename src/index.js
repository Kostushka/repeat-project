import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
// import ReactDOM from 'react-dom';
import App from './App';

import './index.css';

const dialogs = [
    { id: 1, name: 'Банан', message: 'Привет, Банан!' },
    { id: 2, name: 'Ананас', message: 'Привет, Ананас!' },
    { id: 3, name: 'Вишня', message: 'Привет, Вишня!' },
    { id: 4, name: 'Морковь', message: 'Привет, Морковь!' },
    { id: 5, name: 'Петруха', message: 'Привет, Петруха!' },
    { id: 6, name: 'Огуречный огурец', message: 'Привет, Огурец!' },
];

const posts = [
    { id: 1, message: 'Hello' },
    { id: 2, message: 'Hi' },
    { id: 3, message: 'Hey' },
    { id: 4, message: 'Lala' },
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <App dialogs={dialogs} posts={posts} />
        </BrowserRouter>
    </React.StrictMode>
);

// ReactDOMClient.createRoot(
//     <React.StrictMode>
//         <App />
//     </React.StrictMode>,
//     document.getElementById('root')
// );
