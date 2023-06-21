import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AboutUs from './pages/AboutUs';
import HomePage from './pages/HomePage';
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import Cart from './components/Cart'
import FindAStore from './components/FindAStore';
import Profile from './components/Profile';
import Navbar from './components/Navbar';
import App2 from './App2';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true"
  );
  const [userId, setUserId] = useState(0);

  const handleLogin = () => {
    setIsLoggedIn(true);
    localStorage.setItem("isLoggedIn", true);

  };

  useEffect(() => {
    if (localStorage.getItem("isLoggedIn") === "true") {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserId(0);
    localStorage.removeItem('userId');
    localStorage.setItem('isLoggedIn', false);
  };  

  return (
    <BrowserRouter>
      <Navbar isLoggedIn={isLoggedIn} userId={userId} />
      <Routes>
        <Route path='/aboutus' element={<AboutUs />} />
        <Route path='' element={<HomePage />} />
        <Route path='/signin' element={<SignIn onLogin={handleLogin} userId={userId} setUserId={setUserId} />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/findstore' element={<FindAStore />} />
        <Route path='/profile' element={<Profile handleLogout={handleLogout} />} />
        <Route path='/App2' element={<App2 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
