import { Route, Routes } from 'react-router-dom';
import { configRoutes } from '../../routes/configRoutes';

const AppRouter = () => {
    return (
        <Routes>
            {configRoutes.map((el) => (
                <Route key={el.path} path={el.path} element={el.element} />
            ))}
        </Routes>
    );
};

export default AppRouter;
