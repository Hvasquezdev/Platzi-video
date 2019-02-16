import React from 'react';

// Components
import MediaComponent from './media/index';

const mediaItems = [
  {
    img: require('./../../../images/covers/bitcoin.jpg'),
    title: '¿Por qué aprender React?',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    author: 'Hector Vasquez'
  },
  {
    img: require('./../../../images/covers/social.jpg'),
    title: '¿Por qué debes ver Social-Network?',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    author: 'Hector Vasquez'
  }
]

class PlaylistComponent extends React.Component {
  render() {
    const categories = this.props.data.categories;
    return(
      categories.map((category, index) => {
        return(
          <div className="Category-container" key={category.id}>
            <div className="Category-header">
              <h2>{ category.title }</h2>
              <p>{ category.description }</p>
            </div>
            <section className="Media-container">
              {
                categories[index].playlist.map((item) => {
                  return(
                    <MediaComponent 
                      key={item.id}
                      {...item}
                    />
                  );
                })       
              }
            </section>
            <hr/>
          </div>
        );
      })
    );
  }
}

export default PlaylistComponent;
