import React from 'react';
import './App.css';
import HomePage from './Pages/HomePage';
import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path='/home' element={<HomePage />} />
      </Routes>
    </>
  )
}

export default App
