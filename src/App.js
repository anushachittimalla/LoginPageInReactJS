import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Registration from './Registration';
import Login from './Login';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login />} /> 
      <Route path='/Registration' element={<Registration />} />
      </Routes>
      </BrowserRouter>
    
   
  );
}

export default App;
