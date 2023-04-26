import React from "react";
import tomato from '../images/tomato.png'
import '../stylesheets/Timer.css'

const Timer = ({ }) => {
  return (
    <div className="timer-container">
       <img className="image" src={tomato}></img>
      <h1 id="time-left" className="timer">00:00</h1>
    </div>
  );
}

export default Timer;