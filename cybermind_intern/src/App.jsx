import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import { ToastContainer } from 'react-toastify';
import Home from './pages/Home';

const App = () => {
  return (
    <div>
      <ToastContainer />
      <Navbar />
      <Home />
    </div>
  );
};

export default App;
