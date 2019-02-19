import React from 'react';
import './index.css';

//Components
import VolumeIcon from '../../../icons/volume';

function Volume (props) {
  return(
    <button className="Volume">
      <VolumeIcon 
        color="white"
        size={25}
      />
      <div className="Volume-range">
        <input 
          type="range" 
          min={0}
          max={1}
          step={.05}
          onChange={props.volumeChange}
        />
      </div>
    </button>
  );
}

export default Volume;
