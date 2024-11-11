import React from "react";
import { Link } from "react-router-dom";

import MainHeader from "./MainHeader.js";
import "./MainNavigation.css";

const MainNavigation = (props) => {
  return (
    <MainHeader>
      <button className="main-navigation__menu-btn">
        <span />
        <span />
        <span />
      </button>
      <h1 className="main-navigation__title">
        <Link to="/">YourPlace</Link>
      </h1>
      <nav>...</nav>
    </MainHeader>
  );
};

export default MainNavigation;