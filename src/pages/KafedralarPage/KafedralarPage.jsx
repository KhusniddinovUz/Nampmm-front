import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Marquee from "../../components/Marquee/Marquee";
import PageSideMenu from "../../components/PageSideMenu/PageSideMenu";
import banner from "../../assets/rahbariyat/banner.jpg";
import bannerVector from "../../assets/rahbariyat/banner-vector.png";
import bannerBuilding from "../../assets/rahbariyat/banner-building.svg";
import {NavLink} from "react-router";
import "./KafedralarPage.css";
import {markazLinks} from "../../constants.js";
import aniqFanlar from "../../assets/kafedralar/aniq-fanlar.jpg";
import ijtimoiy from "../../assets/kafedralar/ijtimoiy.jpg";
import psixologiya from "../../assets/kafedralar/psixologiya.jpg";
import talim from "../../assets/kafedralar/talim.jpg";

const KafedralarPage = () => {
  return (<div id="kafedralar-page">
    <Navbar style={{color: "#002d6d"}}/>
    <div className="kafedralar-page-content-wrapper">
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
            <li>Kafedralar</li>
          </ul>
          <h2>Kafedralar</h2>
        </div>
      </section>
      <section className="kafedralar-page-content">
        <div className="kafedralar-page-content-left row">
          <div className="kafedralar-item-wrapper col-12 col-xl-4 col-sm6">
            <div className="kafedralar-item-header">
              <img src={aniqFanlar} alt="aniq fanlar"/>
            </div>
            <div className="kafedralar-item-content-wrapper">
              <h5>Aniq va tabiiy fanlar metodikasi kafedrasi</h5>
              <NavLink to={"/institut/kafedralar/aniq-fanlar/"}>Batafsil <i
                  className="fa-solid fa-arrow-right"></i>
              </NavLink>
            </div>
          </div>
          <div className="kafedralar-item-wrapper col-12 col-xl-4 col-sm6">
            <div className="kafedralar-item-header">
              <img src={ijtimoiy} alt="aniq fanlar"/>
            </div>
            <div className="kafedralar-item-content-wrapper">
              <h5>Ijtimoiy-iqtisodiy fanlar va tillarni o'qitish metodikasi kafedrasi</h5>
              <NavLink to={"/"}>Batafsil <i className="fa-solid fa-arrow-right"></i>
              </NavLink>
            </div>
          </div>
          <div className="kafedralar-item-wrapper col-12 col-xl-4 col-sm6">
            <div className="kafedralar-item-header">
              <img src={psixologiya} alt="aniq fanlar"/>
            </div>
            <div className="kafedralar-item-content-wrapper">
              <h5>Pedagogika, psixologiya va amaliy fanlar metodikasi kafedrasi</h5>
              <NavLink to={"/"}>Batafsil <i className="fa-solid fa-arrow-right"></i>
              </NavLink>
            </div>
          </div>
          <div className="kafedralar-item-wrapper col-12 col-xl-4 col-sm6">
            <div className="kafedralar-item-header">
              <img src={talim} alt="aniq fanlar"/>
            </div>
            <div className="kafedralar-item-content-wrapper">
              <h5>Maktabgacha, boshlang'ich va maxsus ta'lim metodikalari kafedrasi</h5>
              <NavLink to={"/"}>Batafsil <i className="fa-solid fa-arrow-right"></i>
              </NavLink>
            </div>
          </div>
        </div>
        <PageSideMenu title={"Markaz"} active={"Kafedralar"} links={markazLinks}/>
      </section>
    </div>

    <Footer/>
    <Marquee/>
  </div>)
};

export default KafedralarPage;
