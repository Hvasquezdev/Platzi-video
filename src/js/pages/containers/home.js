import React, { Component } from 'react';

// Components
import HomeLayout from '../components/home-layout';
import Categories from '../../components/categories/index';

// Api Data
import data from '../../../api.json';

class Home extends Component {
  render() {
    return(
      <HomeLayout>
        <Categories data={data} />
      </HomeLayout>
    );
  }
}

export default Home;