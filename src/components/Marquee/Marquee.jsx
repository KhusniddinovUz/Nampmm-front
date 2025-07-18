import React from "react";
import "./Marquee.css";
import logo from "../../assets/logo.png";
import Marquee from "react-fast-marquee";

const Ticker = () => {
  return (
      <div className="marquee">

        <Marquee>
          <div className="marquee-item">
            <img width={17} src={logo} alt=""/>
            <span>Sayt test rejimida ishlamoqda</span>
          </div>
          <div className="marquee-item">
            <img width={17} src={logo} alt=""/>
            <span>Sayt test rejimida ishlamoqda</span>
          </div>
          <div className="marquee-item">
            <img width={17} src={logo} alt=""/>
            <span>Sayt test rejimida ishlamoqda</span>
          </div>
          <div className="marquee-item">
            <img width={17} src={logo} alt=""/>
            <span>Sayt test rejimida ishlamoqda</span>
          </div>
          <div className="marquee-item">
            <img width={17} src={logo} alt=""/>
            <span>Sayt test rejimida ishlamoqda</span>
          </div>
        </Marquee>
      </div>
  );
};

export default Ticker;
