import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import APP_PATHS from '../../navigation/paths';
import './navbar.css';
import { useHistory } from 'react-router';

interface NavbarProps {
    loggedUser: boolean;
}

const NavBar: React.FC<NavbarProps> = ({loggedUser}) => {

    const history = useHistory();

    const openLoginPage = () => {
        history.push(APP_PATHS.LOGIN);
    };

    return (
        <div className='navbar'>
            <div className='home-button'>
                Home<HomeIcon/>
            </div>
            {loggedUser ?
                <div className='user-info'>
                    User<PersonIcon/>
                </div> :
                <div className="login-button" onClick={openLoginPage}>
                    login <ExitToAppIcon/>
                 </div>
            }

        </div>
    )
};

export default NavBar;