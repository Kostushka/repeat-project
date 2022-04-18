import DialogsContainer from '../containers/DialogsContainer';
import Main from '../containers/Main';

export const configRoutes = [
    { path: '/', element: <Main /> },
    { path: 'main', element: <Main /> },
    { path: 'dialogs', element: <DialogsContainer /> },
    { path: 'dialogs/:id', element: <DialogsContainer /> },
    // { path: '*', element: <Main /> },
];
