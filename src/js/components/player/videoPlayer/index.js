import React, { Component } from 'react';

//Components
import VideoLayout from './layout/index';
import Video from './video/index';
import Title from './title/index';
import PlayPause from './playPause/index';
import Timer from './videoTimer/index';
import VideoControls from './videoControls/index';
import ProgressBar from './progressBar/index';
import Spinner from './spinner/index';
import Volume from './volume/index';
import FullScreen from './fullScreen/index';

class VideoPlayer extends Component {
  state = {
    pause: false,
    duration: 0,
    currentTime: 0,
    loading: false
  }

  togglePlay = () => {
    this.setState({
      pause: !this.state.pause
    });
  }

  loadedMetadata = (e) => {
    this.video = e.target;
    this.setState({
      duration: this.video.duration
    })
  }

  timeUpdate = (e) => {
    this.setState({
      currentTime: e.target.currentTime
    })
  }

  progressChange = (e) => {
    this.video.currentTime = e.target.value;
  }

  seeking = (e) => {
    this.setState({
      loading: true
    })
  }

  seeked = (e) => {
    this.setState({
      loading: false
    })
  }

  volumeChange = (e) => {
    this.video.volume = e.target.value;
  }

  toggleFullScreen = (e) => {
    if(!document.webkitIsFullScreen) {
      this.player.webkitRequestFullscreen();
    } else {
      document.webkitExitFullscreen();
    }
  }

  setRef = (element) => {
    this.player = element;
  }

  componentDidMount() {
    this.setState({
      pause: (!this.props.autoplay)
    });
  }

  render() {
    return(
      <VideoLayout
        setRef={this.setRef}
      >
        <Title 
          title={this.props.modalData.title}
        />
        <VideoControls>
          <PlayPause 
            togglePlay={this.togglePlay}
            pause={this.state.pause}
          />
          <Timer 
            duration={this.state.duration}
            currentTime={this.state.currentTime}
          />
          <ProgressBar 
            duration={this.state.duration}
            value={this.state.currentTime}
            progressChange={this.progressChange}
          />
          <Volume 
            volumeChange={this.volumeChange}
          />
          <FullScreen 
            toggleFullScreen={this.toggleFullScreen}
          />
        </VideoControls>
        <Spinner 
          active={this.state.loading}
        />
        <Video 
          autoplay={this.props.autoplay}
          pause={this.state.pause}
          loadedMetadata={this.loadedMetadata}
          timeUpdate={this.timeUpdate}
          seeking={this.seeking}
          seeked={this.seeked}
          src={this.props.modalData.src}
        />
      </VideoLayout>
    );
  }
}

export default VideoPlayer;