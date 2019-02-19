import React from 'react';
import './index.css';

//Components
import FullScreenIcon from '../../../icons/fullScreen';

function FullScreen (props) {
  return(
    <div 
      className="FullScreen"
      onClick={props.toggleFullScreen}
    >
      <FullScreenIcon 
        color="white"
        size={25}
      />
    </div>
  );
}

export default FullScreen;