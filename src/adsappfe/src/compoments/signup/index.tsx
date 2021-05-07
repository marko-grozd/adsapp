import { TextField } from "@material-ui/core";
import React, { useState } from "react";
import "./signup.css";

const SignUp: React.FC = () => {
  const [username, setUsername] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [phoneNumber, setPhoneNumber] = useState<string>();

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
      <button id='sign-up-button'>Signup</button>
    </div>
  );
};

export default SignUp;
