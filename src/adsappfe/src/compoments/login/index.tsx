import React from 'react';
import './login.css';
import APP_PATHS from '../../navigation/paths';

import { useHistory } from 'react-router-dom';


const Login: React.FC = () => {

    const history = useHistory();

    const backToHome = () => {
        history.push(APP_PATHS.HOME);

    }

    return (
        <div className='login-page'>
            This suppost to be a loginPage;
            Please back to home: <button onClick={backToHome}>Back to home page.</button>
        </div>
    );


};

export default Login;