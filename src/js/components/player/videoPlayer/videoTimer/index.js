import React from 'react';
import './index.css';

function formattedTime (secs) {
  const min = parseInt(secs / 60, 10) < 10 
    ? `0${parseInt(secs / 60, 10)}` 
    : parseInt(secs / 60, 10);

  const seconds = parseInt(secs % 60, 10) < 10 
    ? `0${parseInt(secs % 60, 10)}` 
    : parseInt(secs % 60, 10);

  return `${min}:${seconds}`;
}

function Timer (props) {
  return(
    <div className="Timer">
      <p>
        <span>{ formattedTime(props.currentTime) } / { formattedTime(props.duration) }</span>
      </p>
    </div>
  );
}

export default Timer;