import React, { Component } from 'react';

// Components
import HomeLayout from '../components/homeLayout/home-layout';
import Categories from '../../components/categories/index';
import Related from '../components/related/related';
import ModalContainer from '../../widgets/containers/modal';
import Modal from '../../widgets/components/modal/index';
import ErrorContainer from './error';
import VideoPlayer from '../../components/player/videoPlayer/index';

// Api Data
import data from '../../../api.json';

class Home extends Component {
  state = {
    modalVisible: false,
    modalData: {}
  }

  toggleModal = (data) => {
    this.setState({
      modalVisible: !this.state.modalVisible,
      modalData: data
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
              <Modal 
                toggleModal={this.toggleModal}
              >
                <VideoPlayer 
                  autoplay
                  modalData={this.state.modalData}
                />
              </Modal>
            </ModalContainer>
          }
        </HomeLayout>
      </ErrorContainer>
    );
  }
}

export default Home;