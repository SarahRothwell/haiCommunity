import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {

  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link to="/" className="lk"> LOGO</Link>
        <Link to="/Blog" className="lk"> Resources</Link>
        <Link to="/" className="lk"> Our Stories</Link>
        <Link to="/Support" className="lk"> Support</Link>
        <Link to="/Register" className="lk"> Register</Link>
        <Link to="/Login" className="lk"> Login</Link>
      </div>
    </nav>
  )
}

export default Navbar;
