import React from 'react';

import { Routes, Route } from "react-router-dom";
import Home from './Home';
import About from './About';
import Contact from './contact';
import Nav from './Nav';
import Error from './Error';

function App() {
  return (
    <>
      <Nav/>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="About" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
     

    </>
  );
}

export default App;
