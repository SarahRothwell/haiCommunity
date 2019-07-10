import React from 'react';
import LandingImg from "./LandingImg.js";
import './navbar.css'

const Landing = () => {

  return (
    <section className="landing">
      <div className="box-1">
          <div className = "image-box">
          <LandingImg/>
          </div>
          <div>
            <h1 className="title">Canadian Health Care Associated Infections Society</h1>
            <p className="website-description">Welcome to the website!</p>
          </div>
      </div>

        <div className="container">
          <div className="row">
            <div className="col-sm">
              <h6>This is what we do...</h6>
              <p>Lorem ipsum dolor sit amet, do odio, ullamcorper et sapiente proin pede et cum.</p>
            </div>
            <div className="col-sm">
              <h6>This is what we do...</h6>
              <p>Lorem ipsum dolor sit amet, do odio, ullamcorper et sapiente proin pede et cum.</p>
            </div>
            <div className="col-sm">
              <h6>This is what we do...</h6>
              <p>Lorem ipsum dolor sit amet, do odio, ullamcorper et sapiente proin pede et cum.</p>
            </div>
          </div>
        </div>
    </section>

  )

}

export default Landing;
