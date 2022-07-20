import React, { useState } from "react";
import Forminput from "../src/components/userinput";
import User from "./components/User";

function App() {
  const [item, setItem] = useState([]);

  function Adduser(id) {
    setItem(function (prev) {
      return [...prev, id];
    });
  }

  return (
    <div>
      <Forminput OnAdd={Adduser} />
      {item.map(function (it, index) {
        return <User key={index} ages={it.age} Username={it.username} />;
      })}
    </div>
  );
}

export default App;
