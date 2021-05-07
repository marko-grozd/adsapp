import React, { useState } from "react";
import HomeIcon from "@material-ui/icons/Home";
import PersonIcon from "@material-ui/icons/Person";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import APP_PATHS from "../../navigation/paths";
import "./navbar.css";
import { useHistory } from "react-router";

interface NavbarProps {
  loggedUser: boolean;
}

const NavBar: React.FC<NavbarProps> = ({ loggedUser }) => {
  const history = useHistory();
  const [logout, setLogout] = useState<boolean>(false);

  const openLoginPage = () => {
    history.push(APP_PATHS.LOGIN);
  };

  const logoutAction = () => {
    localStorage.removeItem("token");
    setLogout(true);
  };

  return (
    <div className="navbar">
      <div className="home-button">
        Home
        <HomeIcon />
      </div>
      {loggedUser && !logout ? (
        <div className="user-info">
          User
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
