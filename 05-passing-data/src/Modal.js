import React from 'react';
import ReactDOM from 'react-dom';

const modalRoot = document.getElementById('modal');

class Modal extends React.Component {

  render() {

     const modalStyle = {
        background: 'transparent',
        position: 'absolute',
        top: 200,
        width: '100%',
        textAlign: 'center'
      };


    return ReactDOM.createPortal(
      <div style={modalStyle} >
        {this.props.children}
      </div>,
      modalRoot,
    );
  }
}

export default Modal;