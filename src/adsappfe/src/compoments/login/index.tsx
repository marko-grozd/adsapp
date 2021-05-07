import React, { useState } from "react";
import "./login.css";
import APP_PATHS from "../../navigation/paths";
import TextField from "@material-ui/core/TextField";

import { useHistory } from "react-router-dom";

const Login: React.FC = () => {
  const [email, setEmail] = useState<String>();
  const [password, setPassword] = useState<String>();

  const [time, setTime] = useState<number>(1);

  const history = useHistory();

  const backToHome = () => {
    history.push(APP_PATHS.HOME);
  };

  const signupPage = () => {
      history.push(APP_PATHS.SIGN_UP);
  }

  const handleForm = () => {
    const interval = setInterval(() => {
      setTime((time) => time + 1);
    }, 1000);
    localStorage.setItem("token", "nekiToken");
    setTimeout(() => {
      clearInterval(interval);
      history.push("/");
    }, 5000);
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
      time: {time}
      <div className="down-buttons">
        <button id="back-to-home" className="buttons-d" onClick={backToHome}>
          Back to home
        </button>
        <button id="sign-up-button" className="buttons-d" onClick={signupPage}>
          Sign up
        </button>
      </div>
    </div>
  );
};

export default Login;
