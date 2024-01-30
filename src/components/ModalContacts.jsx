import React, { useEffect, useState } from 'react'
import Modal from './Modal';
import ModalContactDetails from './ModalContactDetails';
import { useNavigate } from 'react-router-dom';

export default function ModalContacts() {
    const [isModalOpen, setIsModalOpen] = useState(true);
    const [contacts, setContacts] = useState([]);
    const [onlyEven, setOnlyEven] = useState(false);
    const [selectedCountry, setSelectedCountry] = useState('');
    const [isLoading, setIsLoading ] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        fetchContacts();
    }, []);
    
    const fetchContacts = async () => {
        try {
            setIsLoading(true)

            const response = await fetch('https://contact.mediusware.com/api/contacts/');
            const data = await response.json();
            
            setContacts(data.results ?? []);
        } catch (error) {
            console.error('err===>', error);
        }
        setIsLoading(false)
    };
    
    if(isLoading) return <h5>Loading...</h5>

    const openContactDetails = (contact) => {
        setSelectedCountry(contact.country.name)
    };

    const closeModal = () => {
      setIsModalOpen(false);
      navigate('/problem-2')
    };


  const handleCheckboxChange = () => {
    setOnlyEven(!onlyEven);
  };
  
  const closeCountryDetailsModal = () => {
    setSelectedCountry('');
  };

    return (
        <>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h2>All Contacts </h2>
        <ul>
        {contacts
          .filter((contact) => (!onlyEven || contact.id % 2 === 0))
          .map((contact) => (
            <li key={contact.id} onClick={() => openContactDetails(contact)}>
              {contact.id} - {contact.country.name}
            </li>
          ))}
      </ul>
        <label>
          Only Even:
          <input
            type="checkbox"
            checked={onlyEven}
            onChange={handleCheckboxChange}
          />
        </label>

      </Modal>

        <ModalContactDetails country={selectedCountry}
        isOpen={!!selectedCountry}
        onClose={closeCountryDetailsModal}  />

      </>
    );
}
