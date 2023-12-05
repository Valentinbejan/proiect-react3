import React, { useState, useRef } from 'react';
import { Button } from 'antd';


function Timer() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  function handleStart() {
    if (!isRunning) {
      setIsRunning(true);
      intervalRef.current = setInterval(() => {
        setTime(prevTime => prevTime + 1);
      }, 1000);
    }
  }

  function handleStop() {
    if (isRunning) {
      setIsRunning(false);
      clearInterval(intervalRef.current);
    }
  }

  function handleReset() {
    setTime(0);
    clearInterval(intervalRef.current);
    setIsRunning(false);
  }

  const seconds = `0${time % 60}`.slice(-2);
  const minutes = `${Math.floor(time / 60)}`;

  return (
    <div>
      <p>{minutes}:{seconds}</p>
      <Button  type="primary" onClick={handleStart}>Start</Button>
      <Button  type="primary" onClick={handleStop}>Stop</Button>
      <Button  type="primary" onClick={handleReset}>Reset</Button>
    </div>
  );
}

export default Timer;