import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Employee from './pages/Employee/Employee';
import Leader from './pages/Leader/Leader';
import Login from './pages/Login/Login';

function App() {
  return (
    <div className='wrapper'>
      <Header />
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/leader' element={<Leader />} />
        <Route path='/employee' element={<Employee />} />
      </Routes>
    </div>
  );
}

export default App;
