import React from 'react';

// Components
import MediaComponent from './media/index';

function Playlist(props) {
  const categories = props.data.categories;
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

export default Playlist;
