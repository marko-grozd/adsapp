import React, { useEffect, useState } from "react";
import HomeIcon from "@material-ui/icons/Home";
import PersonIcon from "@material-ui/icons/Person";
import AddIcon from "@material-ui/icons/Add";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import APP_PATHS from "../../navigation/paths";
import "./navbar.css";
import { useHistory } from "react-router";
import jwtDecode, { JwtPayload } from "jwt-decode";


const NavBar: React.FC = () => {
  const [userName, setUserName] = useState<any>();
  const [loggedUser, setLoggedUser] = useState<boolean>();

  useEffect(() => {
    const token = localStorage.getItem("token");
    token && setLoggedUser(true);
    const name = token && jwtDecode<JwtPayload>(token).sub;
    setUserName(name);
  }, []);

  const history = useHistory();
  const [logout, setLogout] = useState<boolean>(false);

  const openLoginPage = () => {
    history.push(APP_PATHS.LOGIN);
  };

  const openNewAddComponent = () => {
    history.push(APP_PATHS.AD_FORM);
  };

  const logoutAction = () => {
    localStorage.removeItem("token");
    setLogout(true);
  };

  return (
    <div className="navbar">
      <div className="home-button" onClick={() => history.push("/")}>
        Home
        <HomeIcon />
      </div>
      {loggedUser && !logout ? (
        <div className="add-new-ad" onClick={openNewAddComponent}>
          <AddIcon />
          Add new
        </div>
      ) : (
        " "
      )}
      {loggedUser && !logout ? (
        <div className="user-info">
          {userName}
          <PersonIcon /> <button onClick={logoutAction}>logut</button>
        </div>
      ) : (
        <div className="login-button" onClick={openLoginPage}>
          login <ExitToAppIcon />
        </div>
      )}
    </div>
  );
};

export default NavBar;
