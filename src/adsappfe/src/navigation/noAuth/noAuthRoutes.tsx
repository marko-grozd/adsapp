
import Home from '../../compoments/home';
import Login from '../../compoments/login/index';
import APP_PATHS from '../paths';

export default [
    {
        commponent: Login,
        exact: true,
        path: APP_PATHS.LOGIN
    },
    {
        component: Home,
        exact: true,
        path: APP_PATHS.HOME
    },
]