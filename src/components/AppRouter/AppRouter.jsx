import { Route, Routes } from 'react-router-dom';
import DialogsContainer from '../../containers/DialogsContainer';
// import Main from '../../containers/Main';
import MainContainer from '../../containers/MainContainer';
import UsersContainer from '../../containers/UsersContainer';
// import { configRoutes } from '../../routes/configRoutes';

const AppRouter = () => {
    return (
        <Routes>
            {/* {configRoutes.map((el) => (
                <Route key={el.path} path={el.path} element={el.element} />
            ))} */}
            <Route path='/' element={<MainContainer />} />
            <Route path='main' element={<MainContainer />} />
            <Route path='main/:id' element={<MainContainer />} />
            <Route path='dialogs' element={<DialogsContainer />} />
            <Route path='dialogs/:id' element={<DialogsContainer />} />
            <Route path='users' element={<UsersContainer />} />
        </Routes>
    );
};

export default AppRouter;
