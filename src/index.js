import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// Components
import MediaComponent from './js/components/playList/media/index';

const mediaItems = [
  {
    img: require('./images/covers/bitcoin.jpg'),
    title: '¿Por qué aprender React?',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    author: 'Hector Vasquez'
  },
  {
    img: require('./images/covers/social.jpg'),
    title: '¿Por qué debes ver Social-Network?',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    author: 'Hector Vasquez'
  }
]

class App extends React.Component {
  render() {
    return(
      <section className="Grid-container">
        {
          mediaItems.map((item, index) => {
            return(<MediaComponent 
              key={index}
              img={item.img}
              title={item.title}
              description={item.description}
              author={item.author}
            />);
          })       
        }
      </section>
    );
  }
}

const Element = <App />;
const RootElement = document.getElementById("root");
RootElement ? ReactDOM.render(Element, RootElement) : false;

// mediaItems.map((item, index) => {
//   return(<MediaComponent 
//     key={index}
//     img={item.img}
//     title={item.title}
//     description={item.description}
//     author={item.author}
//   />);
// })