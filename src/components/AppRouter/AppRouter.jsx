import { Route, Routes } from 'react-router-dom';
import DialogsContainer from '../../containers/DialogsContainer';
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
                        posts={store.getState().mainPage.posts}
                        newPostText={store.getState().mainPage.newPostText}
                        dispatch={store.dispatch.bind(store)} // метод вызываем в компоненте на нажатие кнопки в колбэке, контекст теряется
                    />
                }
            />
            <Route
                path='main'
                element={
                    <Main
                        posts={store.getState().mainPage.posts}
                        newPostText={store.getState().mainPage.newPostText}
                        dispatch={store.dispatch.bind(store)} // метод вызываем в компоненте на нажатие кнопки в колбэке, контекст теряется
                    />
                }
            />
            <Route
                path='dialogs'
                element={
                    <DialogsContainer
                        dialogs={store.getState().dialogsPage.dialogs}
                        newDialogText={
                            store.getState().dialogsPage.newDialogText
                        }
                        dispatch={store.dispatch.bind(store)} // метод вызываем в компоненте на нажатие кнопки в колбэке, контекст теряется
                    />
                }
            />
            <Route
                path='dialogs/:id'
                element={
                    <DialogsContainer
                        dialogs={store.getState().dialogsPage.dialogs}
                        newDialogText={
                            store.getState().dialogsPage.newDialogText
                        }
                        dispatch={store.dispatch.bind(store)} // метод вызываем в компоненте на нажатие кнопки в колбэке, контекст теряется
                    />
                }
            />
        </Routes>
    );
};

export default AppRouter;
