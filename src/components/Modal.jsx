import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Modal = ({ isOpen, onClose, children }) => {
  const overlayStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: isOpen ? 'flex' : 'none',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  };

  const modalStyle = {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '8px',
    maxWidth: '600px',
    width: '100%',
  };

  return isOpen
    ? ReactDOM.createPortal(
        <div style={overlayStyle}>
          <div
            style={modalStyle}
            onClick={(e) => e.stopPropagation()} // Prevent modal from closing when clicked inside
          >
            {children}
            <button onClick={onClose}>Close</button>
          </div>
        </div>,
        document.body
      )
    : null;
};

export default Modal;
