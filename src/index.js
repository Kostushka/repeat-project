import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
// import ReactDOM from 'react-dom';
import {
    state,
    addPost,
    addMessage,
    updatePostText,
    updateMessageText,
} from './store/state';
import App from './App';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

export const rerenderEntireTree = () => {
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <App
                    state={state}
                    addPost={addPost}
                    addMessage={addMessage}
                    updatePostText={updatePostText}
                    updateMessageText={updateMessageText}
                />
            </BrowserRouter>
        </React.StrictMode>
    );
};
rerenderEntireTree();

// ReactDOMClient.createRoot(
//     <React.StrictMode>
//         <App />
//     </React.StrictMode>,
//     document.getElementById('root')
// );
