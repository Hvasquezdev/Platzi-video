import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// Components
import Playlist from './js/components/playList/playlist';

// Api Data
import data from './api.json';

function App() {
  return(
    <Playlist data={data} />
  );
}

const Element = <App />;
const RootElement = document.getElementById("root");
RootElement ? ReactDOM.render(Element, RootElement) : false;