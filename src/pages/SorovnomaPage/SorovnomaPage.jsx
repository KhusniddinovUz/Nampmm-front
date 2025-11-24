import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Marquee from "../../components/Marquee/Marquee";
import "./SorovnomaPage.css";
import banner from "../../assets/rahbariyat/banner.jpg";
import bannerVector from "../../assets/rahbariyat/banner-vector.png";
import bannerBuilding from "../../assets/rahbariyat/banner-building.svg";
import {NavLink} from "react-router";

const SorovnomaPage = () => {
  return (
      <div id="sorovnoma-page">
        <Navbar style={{color: "#002d6d"}}/>
        <div className="sorovnoma-page-content-wrapper">
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
                  <NavLink to={"/"}>Ta'lim Xizmatlari</NavLink>
                  <i className="fa-solid fa-caret-right"></i>
                </li>
                <li>So'rovnoma</li>
              </ul>
              <h2>So'rovnoma</h2>
            </div>
          </section>

          <div className="sorovnoma-page-content">
            <h3>So'rovnomalar mavjud emas.</h3>
          </div>
        </div>
        <Footer/>
        <Marquee/>
      </div>
  )
};

export default SorovnomaPage;
