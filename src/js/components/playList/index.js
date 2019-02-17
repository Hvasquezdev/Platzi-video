import React from 'react';
import './index.css';

// Components
import MediaComponent from './media/index';

function Playlist (props) {
  const playlist = props.data;
  return(
    <section className="Media-container">
      {
        playlist.map((item) => {
          return(
            <MediaComponent 
              key={item.id}
              {...item}
            />
          );
        })       
      }
    </section>
  );
}

export default Playlist;
