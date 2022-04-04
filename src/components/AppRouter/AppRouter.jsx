import { Route, Routes } from 'react-router-dom';
import Dialogs from '../../containers/Dialogs';
import Main from '../../containers/Main';
// import { configRoutes } from '../../routes/configRoutes';

const AppRouter = ({ dialogs, posts }) => {
    return (
        <Routes>
            {/* {configRoutes.map((el) => (
                <Route key={el.path} path={el.path} element={el.element} />
            ))} */}
            <Route path='/' element={<Main posts={posts} />} />
            <Route path='main' element={<Main posts={posts} />} />
            <Route path='dialogs' element={<Dialogs dialogs={dialogs} />} />
            <Route path='dialogs/:id' element={<Dialogs dialogs={dialogs} />} />
        </Routes>
    );
};

export default AppRouter;
