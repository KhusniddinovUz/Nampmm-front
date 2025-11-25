import React from "react";
import Navbar from "../../components/Navbar/Navbar.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import Marquee from "react-fast-marquee";
import banner from "../../assets/rahbariyat/banner.jpg";
import bannerVector from "../../assets/rahbariyat/banner-vector.png";
import bannerBuilding from "../../assets/rahbariyat/banner-building.svg";
import {NavLink} from "react-router";
import "../TuzilmaPage/TuzilmaPage.css";


const FotogalareyaPage = () => {
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
                  <NavLink to={"/"}>Media resurslar</NavLink>
                  <i className="fa-solid fa-caret-right"></i>
                </li>
                <li>Fotogalareya</li>
              </ul>
              <h2>Fotogalareya</h2>
            </div>
          </section>

          <section className="main-page-content">
            <div className="main-page-content-left" style={{background: "none"}}>
              <h3>Hozircha fotogalareya mavjud emas.</h3>
            </div>
          </section>
        </div>

        <Footer/>
        <Marquee/>
      </div>
  )
};

export default FotogalareyaPage;
