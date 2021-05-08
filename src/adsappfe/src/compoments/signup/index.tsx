import { TextField } from "@material-ui/core";
import React, { useState } from "react";
import { useHistory } from "react-router";
import userservice from "../../services/userservice";
import "./signup.css";

const SignUp: React.FC = () => {
  const [username, setUsername] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [phoneNumber, setPhoneNumber] = useState<string>();
  const [errorMessage, setErrorMessage] = useState<string>();

  const history = useHistory();

  const submit = async () => {
    const userToAdd = {
      userName: username,
      phoneNumber: phoneNumber,
      password: password
    };
    await userservice.addUser(userToAdd)
    .then(resp => {
      console.log(resp.status);
      resp.status === undefined ? history.push('/') : setErrorMessage("Doslo je do greske!!");
    }); 
  }

  return (
    <div className="signup-page">
      <TextField
        id="standard-basic"
        label="username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <TextField
        id="standard-basic"
        label="password"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <TextField
        id="standard-basic"
        label="phone number"
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
      <button id='sign-up-button' onClick={submit}>Signup</button>
      {errorMessage && <h5>{errorMessage}</h5>}
    </div>
  );
};

export default SignUp;
