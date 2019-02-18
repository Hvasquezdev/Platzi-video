import React, { Component } from 'react';

// Components
import HomeLayout from '../components/homeLayout/home-layout';
import Categories from '../../components/categories/index';
import Related from '../components/related/related';
import ModalContainer from '../../widgets/containers/modal';
import Modal from '../../widgets/components/modal/index';
import ErrorContainer from './error';

// Api Data
import data from '../../../api.json';

class Home extends Component {
  state = {
    modalVisible: false
  }

  toggleModal = (e) => {
    this.setState({
      modalVisible: !this.state.modalVisible
    });
  }

  render() {
    return(
      <ErrorContainer>
        <HomeLayout>
          <Related />
          <Categories 
            data={data} 
            toggleModal={this.toggleModal}  
          />
          { 
            this.state.modalVisible &&
            <ModalContainer>
              <Modal toggleModal={this.toggleModal}>
                <h1>
                  React Create Portal
                </h1>
              </Modal>
            </ModalContainer>
          }
        </HomeLayout>
      </ErrorContainer>
    );
  }
}

export default Home;