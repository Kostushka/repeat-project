import { Route } from 'react-router-dom';
import DialogsContainer from '../../containers/DialogsContainer';
// import Main from '../../containers/Main';
import MainContainer from '../../containers/MainContainer';
import UsersContainer from '../../containers/UsersContainer';
// import { configRoutes } from '../../routes/configRoutes';

const AppRouter = () => {
    return (
        <>
            {/* {configRoutes.map((el) => (
                <Route key={el.path} path={el.path} element={el.element} />
            ))} */}
            <Route exact path='/' render={() => <MainContainer />} />
            {/* <Route path='main' element={<MainContainer />} /> */}
            <Route path='/main/:id?' render={() => <MainContainer />} />
            {/* <Route path='dialogs' element={<DialogsContainer />} /> */}
            <Route path='/dialogs/:id?' render={() => <DialogsContainer />} />
            <Route path='/users' render={() => <UsersContainer />} />
        </>
    );
};

export default AppRouter;
