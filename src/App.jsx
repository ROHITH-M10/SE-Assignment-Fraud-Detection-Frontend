import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Register from './pages/Register.jsx';
import Forgot from './pages/Forgot.jsx';
import Signin from './pages/Signin.jsx';
import Reset from './pages/Reset.jsx';
import Faq from './pages/faq.jsx';
import About from './pages/about.jsx';
import Landing from './pages/landing.jsx';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/register' element={<Register />} />
        <Route path='/forgot' element={<Forgot />} />
        <Route path='/reset' element={<Reset />} />
        <Route path= '/faq' element={<Faq />} />
        <Route path='/about' element={<About />} />
        <Route path='/landing' element={<Landing />} />
      </Routes>
    </Router>
  );
}

export default App;