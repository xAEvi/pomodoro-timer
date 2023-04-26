import React from "react";
import '../stylesheets/Controls.css'

const Controls = ({ }) => {
  return (
    <div className="controls-container">
      <div className="control session">
        <h3 id="session-label">Session Length:</h3>
        <input
          id="session-length"
          type="number"
          value={25}
          min={1}
          max={60}
        />
      </div>
      <div className="control break">
        <h3 id="break-label">Break Length:</h3>
        <input
          id="break-legnth"
          type="number"
          value={5}
          min={1}
          max={30}
        />
      </div>
      <div className="control long-break">
        <h3 id="long-break-label">Long Break Length:</h3>
        <input
          id="long-break-length"
          type="number"
          value={15}
          min={1}
          max={60}
        />
      </div>
    </div>
  );
};

export default Controls;