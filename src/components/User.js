import React from "react";
import "./User.css";

function User(props) {
  return (
    <div style={{ backgroundColor: "white", borderRadius: "10%" }}>
      <p className="bee">
        {props.Username} ({props.ages} years old)
      </p>
    </div>
  );
}

export default User;
