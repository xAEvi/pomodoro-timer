import React from "react";
import tomato from '../images/tomato.png'
import '../stylesheets/Timer.css'

const Timer = ({ timer, count }) => {
  return (
    <div className="timer-container">
       <img className="image" src={tomato}></img>
      <h1 id="time-left" className="timer">{timer}</h1>
      <h4 id="count">{count}</h4>
    </div>
  );
}

export default Timer;