import React from "react";
import '../stylesheets/Controls.css';

const Controls = ({ session, breaks, longBreak, handleSessionChange, handleBreaksChange, handleLongBreakChange }) => {

  return (
    <div className="controls-container">
      <div className="control session">
        <h3 id="session-label">Session Length:</h3>
        <input
          id="session-length"
          type="number"
          value={session}
          min={1}
          max={60}
          onChange={(e) => handleSessionChange(e.target.value)}
        />
      </div>
      <div className="control break">
        <h3 id="break-label">Break Length:</h3>
        <input
          id="break-legnth"
          type="number"
          value={breaks}
          min={1}
          max={30}
          onChange={(e) => handleBreaksChange(e.target.value)}
        />
      </div>
      <div className="control long-break">
        <h3 id="long-break-label">Long Break Length:</h3>
        <input
          id="long-break-length"
          type="number"
          value={longBreak}
          min={1}
          max={60}
          onChange={(e) => handleLongBreakChange(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Controls;