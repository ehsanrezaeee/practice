import React, { useState } from "react";
import "./userinput.css";
import Errorr from "./Error";

function Forminput(props) {
  const [user, setUser] = useState({
    username: "",
    age: ""
  });

  function changehandle1(event) {
    const usernames = event.target.value;
    setUser(function (prev) {
      return {
        ...prev,
        username: usernames
      };
    });
  }

  function changehandle2(event) {
    const agess = event.target.value;
    setUser(function (prev) {
      return {
        ...prev,
        age: agess
      };
    });
  }

  function handleClick(event) {
    event.preventDefault();
    if (user.username === "" || user.age === "") {
      return <Errorr />;
    } else {
      props.OnAdd(user);
    }
  }

  return (
    <div style={{ backgroundColor: "white", borderRadius: "5%", width: "50%" }}>
      <form onSubmit={handleClick}>
        <div className="form-group">
          <label>UserName </label>
          <input
            onChange={changehandle1}
            type="text"
            className="form-control"
            value={user.username}
          />
        </div>
        <div className="form-group">
          <label>Age (years) </label>
          <input
            onChange={changehandle2}
            type="number"
            className="form-control"
            value={user.age}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Add User
        </button>
      </form>
    </div>
  );
}

export default Forminput;
