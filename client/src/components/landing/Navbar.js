import React from 'react';
import { Link } from 'react-router-dom';
import { NavItem, Nav, Button} from 'react-bootstrap';
import './navbar.css'

//responsive bootstrap navigation bar

const NavigationBar = () => {

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link to="/">LOGO</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

      <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">

        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/Blog" className="item-link">Resources</Link>
          </li>
          <li className="nav-item">
            <Link to="/Support">Support</Link>
          </li>
          <li className="nav-item">
            <Link to="/">Our Stories</Link>
          </li>
          <li className="nav-item">
            <Link to="/Register">Register</Link>
          </li>
          <li className="nav-item">
            <Link to="/Login">Login</Link>
          </li>
        </ul>

      </div>
    </nav>
  </div>
  )
}

export default NavigationBar;
