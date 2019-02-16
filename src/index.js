import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// Components
import PlaylistComponent from './js/components/playList/playlist';

// Api Data
import data from './api.json';

class App extends React.Component {
  render() {
    return(
      <PlaylistComponent data={data} />
    );
  }
}

const Element = <App />;
const RootElement = document.getElementById("root");
RootElement ? ReactDOM.render(Element, RootElement) : false;