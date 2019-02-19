import React from 'react';
import './index.css';

function VideoLayout (props) {
  return(
    <div 
      className="VideoPlayer"
      ref={props.setRef}
    >
      { props.children }
    </div>
  );
}

export default VideoLayout;