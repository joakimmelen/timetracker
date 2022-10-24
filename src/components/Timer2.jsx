import React, { useCallback, useEffect, useRef, useState } from "react";
import dayjs from "dayjs";

function Timer() {
  const [isRunning, setIsRunning] = useState(false);
  const [count, setCount] = useState(0);

  let startTime = 0;
  let overallTime = 0;
  let intervalID;

  function getElapsedTime() {
    return overallTime - startTime;
  }

  function startTimer() {
    startTime = dayjs();
    setIsRunning(true);
    console.log("starting timer..");
    intervalID = setInterval(() => {
      const currentCount = dayjs() - startTime;
      setCount(Math.floor(currentCount / 1000));
    }, 100);
  }

  function stopTimer() {
    overallTime = overallTime + getElapsedTime();
    setIsRunning(false);
    console.log("stopping timer..");
    clearInterval(intervalID);
    intervalID = null;
  }

  return (
    <div>
      <p>{`Elapsed time: ${count}s`}</p>
      {!isRunning ? (
        <button onClick={startTimer}>Start</button>
      ) : (
        <button onClick={stopTimer}>Stop</button>
      )}
    </div>
  );
}

export default Timer;
