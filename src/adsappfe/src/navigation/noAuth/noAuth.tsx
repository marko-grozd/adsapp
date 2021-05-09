import React from "react";
import { Switch, Route } from "react-router-dom";
import noAuthRoutes from "./noAuthRoutes";

const Navigation: React.FC = () => (
  <Switch>
    {noAuthRoutes.map(({ path, ...rest }) => (
      <Route key={path} path={path} {...rest} />
    ))}
  </Switch>
);

export default Navigation;
