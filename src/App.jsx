import { Routes, Route } from "react-router-dom";
import Problem1 from "./components/Problem-1.jsx";
import Menu from "./components/Menu.jsx";
import Problem2 from "./components/Problem-2.jsx";
import Index from "./components/Index.jsx";
import ModalContacts from "./components/ModalContacts.jsx";
import ModalContactDetails from "./components/ModalContactDetails.jsx";
import ModalUSContacts from "./components/ModalUSContacts.jsx";
import { useState } from "react";

function App() {
  const [selectedContact, setSelectedContact] = useState(null);

  function selectContact(contact){
    setSelectedContact(contact)
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/" element={<Menu />}>
          <Route path="problem-1" element={<Problem1 />} />
          <Route path="problem-2" element={<Problem2 />} />
        </Route>
        <Route path="/problem2/all-contacts" element={<ModalContacts  />} />
        <Route path="/problem2/us-contacts" element={<ModalUSContacts/>} />
      </Routes>
    </>
  );
}

export default App;
