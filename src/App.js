import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Employee from './pages/Employee/Employee';
import Leader from './pages/Leader/Leader';
import Login from './pages/Login/Login';
import CreateIPR from './pages/CreateIPR/CreateIPR';
import Management from './pages/Management/Management';
import TaskModal from './components/TaskModal/TaskModal';

function App() {
  return (
    <div className='wrapper'>
      <Header />
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/leader' element={<Leader />} />
        <Route path='/employee' element={<Employee />} />
        <Route path='/create-ipr' element={<CreateIPR />} />
        <Route path='/management' element={<Management />} />
      </Routes>
      <TaskModal />
    </div>
  );
}

export default App;
