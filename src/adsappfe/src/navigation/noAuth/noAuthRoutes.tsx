
import Home from '../../compoments/home';
import Login from '../../compoments/login';

import APP_PATHS from '../paths';

export default [
    {
        component: Login,
        exact: true,
        path: APP_PATHS.LOGIN
    },
    {
        component: Home,
        exact: true,
        path: APP_PATHS.HOME
    },
]