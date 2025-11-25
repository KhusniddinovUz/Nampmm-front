import React from "react";
import Navbar from "../../components/Navbar/Navbar.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import Marquee from "react-fast-marquee";
import banner from "../../assets/rahbariyat/banner.jpg";
import bannerVector from "../../assets/rahbariyat/banner-vector.png";
import bannerBuilding from "../../assets/rahbariyat/banner-building.svg";
import {NavLink} from "react-router";
import "../TuzilmaPage/TuzilmaPage.css";


const BoshIshOrinlariPage = () => {
  return (
      <div className="main-page">
        <Navbar style={{color: "#002d6d"}}/>

        <div className="main-page-content-wrapper">
          <section id="leadership-header">
            <div className="header-background">
              <div className="header-background-image">
                <img src={banner} alt="banner-image"/>
              </div>
              <div className="header-background-icon">
                <img
                    className="header-vector"
                    src={bannerVector}
                    alt="banner-vector"
                />
                <img
                    className="header-banner-icon"
                    src={bannerBuilding}
                    alt="banner-building"
                />
              </div>
            </div>
            <div className="header-content">
              <ul>
                <li>
                  <NavLink to={"/"}>Asosiy sahifa</NavLink>
                  <i className="fa-solid fa-caret-right"></i>
                </li>
                <li>
                  <NavLink to={"/"}>Markaz</NavLink>
                  <i className="fa-solid fa-caret-right"></i>
                </li>
                <li>Bo'sh ish o'rinlari</li>
              </ul>
              <h2>Bo'sh ish o'rinlari</h2>
            </div>
          </section>

          <section className="main-page-content">
            <div className="main-page-content-left" style={{background: "none"}}>
              <h3>
                Bo'sh ish o'rinlari haqidagi ma'lumot yuzasidan Inson Resurslari bo'limi
                bilan bog'laning (HR) +998 (69) 234-01-35
              </h3>
            </div>
          </section>
        </div>

        <Footer/>
        <Marquee/>
      </div>
  )
};

export default BoshIshOrinlariPage;
