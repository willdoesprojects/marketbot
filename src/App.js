import './index.css';
import Employee from './components/Employee';
import {useState} from 'react';
import Navbar from './components/Navbar';
import AboutUs from './pages/AboutUs';
import HomePage from './pages/HomePage';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/aboutus' element={<AboutUs />} />
      <Route path='/homepage' element={<HomePage />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
