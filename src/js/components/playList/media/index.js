import React from 'react';
import './index.css';

class MediaComponent extends React.Component {
  constructor() {
    super();

    this.state = {
    }
  }

  render() {
    const cardImages = {
      img1: {
        backgroundImage: `url(${require('../../../../images/covers/bitcoin.jpg')})`
      }
    }
    return(
      <section className="Media-container">
        <a href="" className="card">
          <div className="thumb" style={ cardImages.img1 }></div>
          <article>
            <h2>¿Por qué aprender React?</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </p>
            <span>Hector Vasquez</span>
          </article>
        </a>
      </section>
    );
  }
}

export default MediaComponent;