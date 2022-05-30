import React from "react";
import "./Hero.css";
import Crypto from "../assets/Crypto.png";
const Hero = () => {
  return (

    <div className="hero" id="home">
      <div className="container" >

        {/*left side*/}
        <div className="left">
          <h1>Invest in crypto easy and fast</h1>
          <br/>
          <p>Buy, Sell and store hundreds of different kinds of cryptocurrencies.</p>
          <div className="input-container">
            <input type="email" placeholder="Enter your E-Mail" />
            <button className="btn"> Learn more</button>
          </div>
        </div>

        {/*Right side*/}
        <div className="right">
          <div className="img-container">
            <img src={Crypto} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
