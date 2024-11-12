import React from "react";
import ReactDOM from "react-dom";

import "./Backdrop.css";
const Backdrop = (prpos) => {
  return ReactDOM.createPortal(
    <div className="backdrop" onClick={prpos.onClick}></div>,
    document.getElementById("backdrop-hook")
  );
};

export default Backdrop;
