import React from "react";
import "./Error.css";

function Errorr() {
  return (
    <div className="popup" onclick="myFunction()">
      Click me!
      <span className="popuptext" id="myPopup">
        username and age cannot be empty
      </span>
    </div>
  );
}

export default Errorr;
