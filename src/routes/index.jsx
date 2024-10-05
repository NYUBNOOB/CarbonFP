import { Outlet, useRoutes } from 'react-router-dom'
import LoginPage from '../page/login-page'
import HomePage  from '../page/home-page';

import SignUpPage from '../page/signup-page';

const Routes = () => {
    const element = useRoutes([
        {   path: '/', element: <HomePage /> },
        {   path: 'login', element: <LoginPage />},
        {   path: 'Signup', element : <SignUpPage />}                    
    ]);

    return element;
}
export default Routes