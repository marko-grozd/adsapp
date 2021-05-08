import React, { useState } from "react";
import "./login.css";
import APP_PATHS from "../../navigation/paths";
import TextField from "@material-ui/core/TextField";

import { useHistory } from "react-router-dom";
import loginservice from "../../services/loginservice";

const Login: React.FC = () => {
  const [email, setEmail] = useState<String>();
  const [password, setPassword] = useState<String>();
  const [errorMessage, setErrorMessage] = useState<String>();

  const history = useHistory();

  const backToHome = () => {
    history.push(APP_PATHS.HOME);
  };

  const signupPage = () => {
      history.push(APP_PATHS.SIGN_UP);
  }

  const handleForm = async () => {
    const loginUser = {
      username: email,
      password: password
    };
    await loginservice.loginUser(loginUser)
    .then(resp => {
      if (resp.status === undefined) {
        localStorage.setItem("token", resp.token);
        history.push("/");
      } else {
        setErrorMessage("Doslo je do greske prilikom prijavljivanja!");
      }
    })  
  };

  return (
    <div className="login-page">
      <TextField
        id="standard-basic"
        label="username"
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        id="standard-basic"
        label="password"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button id="login-button" onClick={handleForm}>
        {" "}
        Login{" "}
      </button>

      <div className="down-buttons">
        <button id="back-to-home" className="buttons-d" onClick={backToHome}>
          Back to home
        </button>
        <button id="sign-up-button" className="buttons-d" onClick={signupPage}>
          Sign up
        </button>
      </div>
      {errorMessage && <h5>{errorMessage} </h5> }
    </div>
  );
};

export default Login;
