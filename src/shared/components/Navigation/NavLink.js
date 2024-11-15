import React from "react";
import { NavLink } from "react-router-dom";

import "./NavLink.css";

const NavLinks = (Props) => {
  return (
    <ul className="nav-links">
      <li>
        <NavLink to="/users">All USERS</NavLink>
      </li>
      <li>
        <NavLink to="/u1/places">MY PLACES</NavLink>
      </li>
      <li>
        <NavLink to="/place/newplace">ADD PLACE</NavLink>
      </li>
      <li>
        <NavLink to="/auth">AUTHENTICATE</NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;
