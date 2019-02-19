import React from 'react';
import './index.css';

function VideoControls (props) {
  return(
    <div className="VideoPlayerControls">
      { props.children }
    </div>
  );
}

export default VideoControls;