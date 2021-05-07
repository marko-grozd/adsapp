import React, { useState, useEffect } from "react";
import Login from "../login";
import NavBar from "../navBar/navbar";

import './home.css';


const Home: React.FC = () => {

  const [tokenExist, setTokenExist] = useState<boolean>(false);

  useEffect(() => {
    const tokenInfo = localStorage.getItem("token");
    tokenInfo && setTokenExist(true);
  }, [])

  return (
    <div className="home">
      <NavBar loggedUser={tokenExist} />
      <p>Zdravo!!!</p>
      <Login/>
    </div>
  );
};

export default Home;
