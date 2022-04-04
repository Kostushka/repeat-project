import Dialogs from '../containers/Dialogs';
import Main from '../containers/Main';

export const configRoutes = [
    { path: '/', element: <Main /> },
    { path: 'main', element: <Main /> },
    { path: 'dialogs', element: <Dialogs /> },
    { path: 'dialogs/:id', element: <Dialogs /> },
    // { path: '*', element: <Main /> },
];
