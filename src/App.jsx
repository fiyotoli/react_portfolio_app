import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Router basename="/react_portfolio_app">  {/* Replace '/react_portfolio_app' with your actual repo name */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Add other routes here as needed */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
