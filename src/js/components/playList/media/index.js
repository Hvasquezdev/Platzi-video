import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './index.css';

class MediaComponent extends PureComponent {
  handleClick = (e) => {
  }

  render() {
    const cardImage = {
      backgroundImage: `url(${require('../../../../' + this.props.cover)})`
    }
    return(
      <a href={this.props.src} className="card" onClick={this.handleClick} target="_blank">
        <div className="thumb" style={ cardImage }></div>
        <article>
          <h3>{ this.props.title }</h3>
          <span>{ this.props.author }</span>
        </article>
      </a>
    );
  }
}

MediaComponent.propTypes = {
  cover: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['video', 'audio']).isRequired
};

export default MediaComponent;