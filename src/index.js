import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// Components
import Home from './js/pages/containers/home';

function App() {
  return(
    <Home />
  );
}

const Element = <App />;
const RootElement = document.getElementById("root");
RootElement ? ReactDOM.render(Element, RootElement) : false;