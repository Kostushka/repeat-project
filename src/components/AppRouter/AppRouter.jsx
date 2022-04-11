import { Route, Routes } from 'react-router-dom';
import Dialogs from '../../containers/Dialogs';
import Main from '../../containers/Main';
// import { configRoutes } from '../../routes/configRoutes';

const AppRouter = ({ store }) => {
    return (
        <Routes>
            {/* {configRoutes.map((el) => (
                <Route key={el.path} path={el.path} element={el.element} />
            ))} */}
            <Route
                path='/'
                element={
                    <Main
                        posts={store.getState.mainPage.posts} // геттер getState вызывается без ()
                        newPostText={store.getState.mainPage.newPostText}
                        dispatch={store.dispatch.bind(store)} // метод вызываем в компоненте на нажатие кнопки в колбэке, контекст теряется
                    />
                }
            />
            <Route
                path='main'
                element={
                    <Main
                        posts={store.getState.mainPage.posts} // геттер getState вызывается без ()
                        newPostText={store.getState.mainPage.newPostText}
                        dispatch={store.dispatch.bind(store)} // метод вызываем в компоненте на нажатие кнопки в колбэке, контекст теряется
                    />
                }
            />
            <Route
                path='dialogs'
                element={
                    <Dialogs
                        dialogs={store.getState.dialogsPage.dialogs} // геттер getState вызывается без ()
                        newDialogText={store.getState.dialogsPage.newDialogText}
                        dispatch={store.dispatch.bind(store)} // метод вызываем в компоненте на нажатие кнопки в колбэке, контекст теряется
                    />
                }
            />
            <Route
                path='dialogs/:id'
                element={
                    <Dialogs
                        dialogs={store.getState.dialogsPage.dialogs} // геттер getState вызывается без ()
                        newDialogText={store.getState.dialogsPage.newDialogText}
                        dispatch={store.dispatch.bind(store)} // метод вызываем в компоненте на нажатие кнопки в колбэке, контекст теряется
                    />
                }
            />
        </Routes>
    );
};

export default AppRouter;
