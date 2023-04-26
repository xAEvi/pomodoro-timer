import React from "react";
import tomato from '../images/tomato.png'
import '../stylesheets/Timer.css'

const Timer = props => {
    return (
        <div className="container">
            <img className="image" src={tomato}></img>
            <h1 className="timer">00:00</h1>
        </div>
    );
}

export default Timer;