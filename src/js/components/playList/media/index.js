import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

class MediaComponent extends React.Component {
  handleClick = (e) => {
    console.log('hola')
  }

  render() {
    const cardImage = {
      backgroundImage: `url(${this.props.img})`
    }
    return(
      <a href="#" className="card" onClick={this.handleClick}>
        <div className="thumb" style={ cardImage }></div>
        <article>
          <h2>{ this.props.title }</h2>
          <p>{ this.props.description }</p>
          <span>{ this.props.author }</span>
        </article>
      </a>
    );
  }
}

MediaComponent.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  author: PropTypes.string
};

export default MediaComponent;