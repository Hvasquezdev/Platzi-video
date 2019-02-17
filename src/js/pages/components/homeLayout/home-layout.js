import React from 'react';
import './index.css';

function HomeLayout (props) {
  return(
    <div className="Home-container">
      { props.children }
    </div>
  );
}

export default HomeLayout;