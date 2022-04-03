import Dialogs from '../containers/Dialogs';
import Main from '../containers/Main';

export const configRoutes = [
    { path: '/main', element: <Main /> },
    { path: '/dialogs', element: <Dialogs /> },
    { path: '*', element: <Main /> },
];
