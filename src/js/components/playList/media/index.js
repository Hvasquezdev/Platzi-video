import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './index.css';

class MediaComponent extends PureComponent {
  handleClick = () => {
    this.props.toggleModal(this.props)
  }

  render() {
    const cardImage = {
      backgroundImage: `url(${require('../../../../' + this.props.cover)})`
    }
    return(
      <div 
        className="card" 
        onClick={this.handleClick}
      >
        <div className="thumb" style={ cardImage }></div>
        <article>
          <h3>{ this.props.title }</h3>
          <span>{ this.props.author }</span>
        </article>
      </div>
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