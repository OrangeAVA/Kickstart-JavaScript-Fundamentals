import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import DataBinding from './DataBinding'; // Include this after creating DataBinding.jsx

function App() {
  return (
    <Router>
      <div>
        {/* Inside <nav> - Navigation Links */}
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/databinding">Data Binding</Link></li> {/* Add new route */}
          </ul>
        </nav>

        {/* Inside <Routes> - Define Route Paths */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/databinding" element={<DataBinding />} /> {/* New route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
