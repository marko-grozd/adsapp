import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import  APP_PATHS  from '../../navigation/paths';
import noAuthRoutes from './noAuthRoutes';


const Navigation: React.FC = () => (
    <Switch>
        {noAuthRoutes.map(({ path, ...rest}) => (
            <Route key={path} path={path} {...rest } />
        ))}
        <Redirect to={APP_PATHS.HOME} />
    </Switch>
);

export default Navigation;