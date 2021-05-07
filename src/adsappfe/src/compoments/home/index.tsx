import React, { useState, useEffect } from "react";
import NavBar from "../navbar/navbar";

import "./home.css";

const Home: React.FC = () => {
  const [tokenExist, setTokenExist] = useState<boolean>(false);

  useEffect(() => {
    const tokenInfo = localStorage.getItem("token");
    tokenInfo && setTokenExist(true);
  }, []);

  return (
    <div className="home">
      <NavBar loggedUser={tokenExist} />
      <p>Zdravo!!!</p>
      <p> status token: {tokenExist} </p>
    </div>
  );
};

export default Home;
