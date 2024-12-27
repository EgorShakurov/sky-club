import React from 'react';
import { Routes, Route } from "react-router-dom";
import NavMain from './layout/NavMain';
import Nav from './layout/Nav';
import Main from './pages/Main';
import Info from './pages/Info';
import Services from './pages/Services.js';
import Contacts from './pages/Contacts.js';
import Support from './pages/Support.js';


function App() {
  return (
    <>
      <NavMain />
      <div>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/info' element={<Info />} />
          <Route path='/services' element={<Services/>} />
          <Route path='/contacts' element={<Contacts/>} />
          <Route path='/support' element={<Support/>}/>  
        </Routes>
      </div>
      <Nav/>
    </>
  );
}

export default App;
