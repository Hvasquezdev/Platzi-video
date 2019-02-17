import React from 'react';

// Components
import Playlist from '../../playList/index';

function Category (props) {
  return(
    <div className="Category">
      <div className="Category-header">
        <h2>{ props.title }</h2>
        <p>{ props.description }</p>
      </div>
      <Playlist 
        data={props.playlist} 
        toggleModal={props.toggleModal}  
      />
    </div>
  );
}

export default Category;