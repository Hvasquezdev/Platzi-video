import React from 'react';
import './index.css';

function Modal (props) {
  return(
    <div className="Modal">
      {props.children}
      <button 
        className="Modal-close"
        onClick={props.toggleModal} 
      />
    </div>
  );
}

export default Modal;