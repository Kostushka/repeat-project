import { Route, Routes } from 'react-router-dom';
import Dialogs from '../../containers/Dialogs';
import Main from '../../containers/Main';
// import { configRoutes } from '../../routes/configRoutes';

const AppRouter = ({ state, addPost, addMessage }) => {
    return (
        <Routes>
            {/* {configRoutes.map((el) => (
                <Route key={el.path} path={el.path} element={el.element} />
            ))} */}
            <Route
                path='/'
                element={
                    <Main posts={state.mainPage.posts} addPost={addPost} />
                }
            />
            <Route
                path='main'
                element={
                    <Main posts={state.mainPage.posts} addPost={addPost} />
                }
            />
            <Route
                path='dialogs'
                element={
                    <Dialogs
                        dialogs={state.dialogsPage.dialogs}
                        addMessage={addMessage}
                    />
                }
            />
            <Route
                path='dialogs/:id'
                element={
                    <Dialogs
                        dialogs={state.dialogsPage.dialogs}
                        addMessage={addMessage}
                    />
                }
            />
        </Routes>
    );
};

export default AppRouter;
