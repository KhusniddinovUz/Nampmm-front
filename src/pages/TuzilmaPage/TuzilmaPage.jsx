import React from "react";
import Navbar from "../../components/Navbar/Navbar.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import Marquee from "react-fast-marquee";
import banner from "../../assets/rahbariyat/banner.jpg";
import bannerVector from "../../assets/rahbariyat/banner-vector.png";
import bannerBuilding from "../../assets/rahbariyat/banner-building.svg";
import {NavLink} from "react-router";
import PageSideMenu from "../../components/PageSideMenu/PageSideMenu.jsx";
import {markazLinks} from "../../constants.js";
import "./TuzilmaPage.css";
import tuzilma from "../../assets/tuzilma.png";


const TuzilmaPage = () => {
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
                <li>Markaz Tuzilmasi</li>
              </ul>
              <h2>Markaz Tuzilmasi</h2>
            </div>
          </section>

          <section className="main-page-content">
            <div className="main-page-content-left">
              <img src={tuzilma} alt=""/>
            </div>
            <PageSideMenu title={"Markaz"} active="Markaz Tuzilmasi" links={markazLinks}/>
          </section>
        </div>

        <Footer/>
        <Marquee/>
      </div>
  )
};

export default TuzilmaPage;
