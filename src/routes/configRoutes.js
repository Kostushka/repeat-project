import DialogsContainer from '../containers/DialogsContainer';
// import Main from '../containers/Main';
import MainContainer from '../containers/MainContainer';

export const configRoutes = [
    { path: '/', element: <MainContainer /> },
    { path: 'main', element: <MainContainer /> },
    { path: 'dialogs', element: <DialogsContainer /> },
    { path: 'dialogs/:id', element: <DialogsContainer /> },
    // { path: '*', element: <Main /> },
];
