import React from "react";
import UpperNav from "../UpperNav/upperNav";
import NavBar from "../NavBar/navBar";
import Page from "../Page/page";
import "./home.css";

const HomeJam = () => {
  return (
    <div id="Home">
      <UpperNav />
      <NavBar />
      <Page />
    </div>
  );
};

export default HomeJam;
