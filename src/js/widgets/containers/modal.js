import React, { Component } from 'react';
import { createPortal } from 'react-dom';

class ModalContainer extends Component {
  render() {
    const element = this.props.children;
    const rootElement = document.querySelector('#Modal-container');
    return createPortal(element, rootElement);
  }
}

export default ModalContainer;