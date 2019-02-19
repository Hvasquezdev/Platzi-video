import React, { Component } from 'react';
import './index.css';

class Video extends Component {
  togglePlay() {
    if(this.props.pause) {
      this.video.play();
    } else {
      this.video.pause();
    }
  }

  componentWillReceiveProps(newProps) {
    if (newProps.pause !== this.props.pause) {
      this.togglePlay();
    }
  }

  setRef = (element) => {
    this.video = element;
  }

  render() {
    const { 
      loadedMetadata, 
      timeUpdate,
      seeking,
      seeked
    } = this.props;
    return(
      <div className="Video">
        <video
          autoPlay={this.props.autoplay}
          src={this.props.src}
          ref={this.setRef}
          onLoadedMetadata={loadedMetadata}
          onTimeUpdate={timeUpdate}
          onSeeking={seeking}
          onSeeked={seeked}
        />
      </div>
    );
  }
}

export default Video;