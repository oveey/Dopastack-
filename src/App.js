import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Contact } from './component/Contact';
import Faq from './component/Faq'; // Assuming Faq is exported as default



const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<Contact />} />
          <Route path="/" element={<Faq />} />

        </Routes>
      </Router>
    
    </>
  );
};

export default App;

