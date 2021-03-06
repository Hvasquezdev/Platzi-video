import React from 'react';
import './index.css';

function ProgressBar (props) {
  return(
    <div className="ProgressBar">
      <input 
        type="range"
        min={0}
        max={props.duration}
        value={props.value}
        onChange={props.progressChange}
      />
    </div>
  );
}

export default ProgressBar;