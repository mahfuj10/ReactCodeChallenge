import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router,  Route, Link, useParams, Routes, useNavigate } from 'react-router-dom';

const Problem2 = () => {
  
  const navigate = useNavigate();

  return (
    <>
      <div className="container">
        <div className="row justify-content-center mt-5">
          <h4 className="text-center text-uppercase mb-5">Problem-2</h4>
          <div className="d-flex justify-content-center gap-3">
            <Link to="/problem2/all-contacts" className="btn btn-lg btn-outline-primary">
              All Contacts
            </Link>
            <Link to="/problem2/us-contacts" className="btn btn-lg btn-outline-warning">
              US Contacts
            </Link>
          </div>
        </div>
        
         
      </div>
      {/* <ModalContacts
        country="all"
        navigate={navigate}
      /> */}
    </>
  );

 
};

export default Problem2;
