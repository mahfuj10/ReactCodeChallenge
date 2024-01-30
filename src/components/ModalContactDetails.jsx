import React from 'react';
import Modal from './Modal';

const CountryDetailsModal = ({ country, isOpen, onClose }) => {
  // Fetch and display details for the selected country
  // ...

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <h2>{`Details for ${country}`}</h2>
      {/* Display country details here */}
    </Modal>
  );
};

export default CountryDetailsModal;
