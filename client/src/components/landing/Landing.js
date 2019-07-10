import React from 'react';
import LandingImg from "./LandingImg.js";
import './landing.css'

const Landing = () => {

  return (
    <section className="landing">
    <div className = "image-container">
      <LandingImg/>
      <div className = "main-header">
      <h1>Canadian Health Care Associated Infections Society</h1>
      <h2>Duis dolor ligula, blandit sodales est eget, maximus accumsan. Magna urna, posuere vel ante ut, facilisis pharetra risus.</h2>
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
