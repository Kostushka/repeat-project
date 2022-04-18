import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
// import ReactDOM from 'react-dom';
import { store } from './store/store';
import { StoreContext } from './storeContext';
import App from './App';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

const rerenderEntireTree = () => {
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <StoreContext.Provider value={store}>
                    <App />
                </StoreContext.Provider>
            </BrowserRouter>
        </React.StrictMode>
    );
};

rerenderEntireTree();

store.subscribe(() => {
    rerenderEntireTree();
});

// ReactDOMClient.createRoot(
//     <React.StrictMode>
//         <App />
//     </React.StrictMode>,
//     document.getElementById('root')
// );
