import React from 'react';
import { Link } from 'react-router-dom';
import './MyNavbar.css'; // Create and import a CSS file for Navbar styles

const MyNavbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-link">Home</Link>
      <Link to="/blogs" className="nav-link">Blogs</Link>
      <Link to="/contact" className="nav-link">Contact</Link>
      <Link to="/about" className="nav-link">About</Link>
    </nav>
  );
};

export default MyNavbar;
