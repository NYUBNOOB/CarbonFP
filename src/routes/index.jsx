import { Outlet, useRoutes } from 'react-router-dom'
import LoginPage from '../page/login-page'
import HomePage  from '../page/home-page';

import SignUp from '../components/Test';

const Routes = () => {
    const element = useRoutes([
        {   path: '/', element: <HomePage /> },
        {   path: 'login', element: <LoginPage />},
        {   path: 'SignUp', element : <SignUp />}                    
    ]);

    return element;
}
export default Routes