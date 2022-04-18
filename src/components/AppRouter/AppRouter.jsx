import { Route, Routes } from 'react-router-dom';
import DialogsContainer from '../../containers/DialogsContainer';
import Main from '../../containers/Main';
// import { configRoutes } from '../../routes/configRoutes';

const AppRouter = () => {
    return (
        <Routes>
            {/* {configRoutes.map((el) => (
                <Route key={el.path} path={el.path} element={el.element} />
            ))} */}
            <Route path='/' element={<Main />} />
            <Route path='main' element={<Main />} />
            <Route path='dialogs' element={<DialogsContainer />} />
            <Route path='dialogs/:id' element={<DialogsContainer />} />
        </Routes>
    );
};

export default AppRouter;
