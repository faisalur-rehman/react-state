import React, { useState } from "react";
import "./App.css";

function Room() {
  const [isLit, setLit] = useState(false);
  const [temp, setTemp] = useState(22);
  const mode = isLit ? "lit" : "dark";
  return (
    <div className={`room ${mode}`}>
      the room is {isLit ? "Lit" : "Dark"}
      <br />
      The room tempreture is {temp}
      <br />
      <button onClick={() => setLit(!isLit)}> Change Mode</button>
      <br />
      <button onClick={() => setLit(true)}>ON</button>
      <button onClick={() => setLit(false)}>OFF</button>
      <br />
      <button onClick={() => setTemp(temp + 1)}>IncrementTemp</button>
      <button onClick={() => setTemp(temp - 1)}>DecrementTemp</button>
    </div>
  );
}
export default Room;
