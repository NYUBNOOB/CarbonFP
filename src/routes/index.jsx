import { Outlet, useRoutes } from 'react-router-dom'
import LoginPage from '../page/login-page'
import HomePage  from '../page/home-page';

const Routes = () => {
    const element = useRoutes([
        {   path: '/', element: <HomePage /> },
        {
            path: 'login', element: <LoginPage />,
        },
    ]);

    return element;
}
export default Routes