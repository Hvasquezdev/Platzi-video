import React from 'react';
import './index.css';

//Components
import Play from '../../../icons/play';
import Pause from '../../../icons/pause';

function PlayPause (props) {
  return(
    <div className="PlayPause">
      <button onClick={props.togglePlay}>
        {
          props.pause
          ? <Play size={25} color="white" /> 
          : <Pause size={25} color="white" />
        }
      </button>
    </div>
  );
}

export default PlayPause;