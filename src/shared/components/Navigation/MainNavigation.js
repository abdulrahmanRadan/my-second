import React from "react";
import { Link } from "react-router-dom";

import "./MainNavigation.css";
import MainHeader from "./MainHeader.js";
import NavLinks from "./NavLink.js";
import SideDrawer from "./SideDrawer.js";

const MainNavigation = (props) => {
  return (
    <React.Fragment>
      <SideDrawer>
        <nav className="main-navigation__drawer-var">
          <NavLinks />
        </nav>
      </SideDrawer>
      <MainHeader>
        <button className="main-navigation__menu-btn">
          <span />
          <span />
          <span />
        </button>
        <h1 className="main-navigation__title">
          <Link to="/">YourPlace</Link>
        </h1>
        <nav className="main-navigation__header-nav">
          <NavLinks />
        </nav>
      </MainHeader>
    </React.Fragment>
  );
};

export default MainNavigation;
