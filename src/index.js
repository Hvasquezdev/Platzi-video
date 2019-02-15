import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// Components
import MediaComponent from './js/components/playList/media/index';

class App extends React.Component {
  render() {
    return(
      <MediaComponent />
    );
  }
}

const Element = <App />;
const RootElement = document.getElementById("root");
RootElement ? ReactDOM.render(Element, RootElement) : false;