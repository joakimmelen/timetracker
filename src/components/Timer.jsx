import React from "react";

function Timer() {
  function handleClick() {
    console.log(Date.now());
  }
  return (
    <div>
      <button onClick={handleClick}>Start</button>
      <button onClick={handleClick}>Stop</button>
    </div>
  );
}

export default Timer;
