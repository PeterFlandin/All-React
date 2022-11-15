import React from "react";
import Countries from "../Components/Countries";
import Logo from "../Components/Logo";
import Navigation from "../Components/Navigation";


const Home = () => {
  return (
    <div>
      <Logo />
      <Navigation />
      <Countries />
      <h1>Acceuil</h1>
    </div>
  );
};

export default Home;
