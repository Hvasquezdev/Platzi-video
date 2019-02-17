import React from 'react';
import './index.css';

function Modal (props) {
  return(
    <div className="Modal">
      {props.children}
      <button onClick={props.toggleModal}>Cerrar</button>
    </div>
  );
}

export default Modal;