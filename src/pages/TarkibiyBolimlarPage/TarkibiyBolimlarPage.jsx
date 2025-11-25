import React from "react";
import Navbar from "../../components/Navbar/Navbar.jsx";
import banner from "../../assets/rahbariyat/banner.jpg";
import bannerVector from "../../assets/rahbariyat/banner-vector.png";
import bannerBuilding from "../../assets/rahbariyat/banner-building.svg";
import {NavLink} from "react-router";
import PageSideMenu from "../../components/PageSideMenu/PageSideMenu.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import Marquee from "../../components/Marquee/Marquee.jsx";
import {markazLinks} from "../../constants.js";
import "./TarkibiyBolimlarPage.css";
import akademikFaoliyat from "../../assets/bolimlar/akademikFaoliyat.jpg";
import fanlar from "../../assets/bolimlar/fanlar.jpg";
import kasbiyTalim from "../../assets/bolimlar/kasbiyTalim.jpg";
import maktabgachaTalim from "../../assets/bolimlar/maktabgachaTalim.jpg";
import metodikXizmat from "../../assets/bolimlar/metodikXizmat.jpg";
import moliya from "../../assets/bolimlar/moliya.jpg";
import talimNazorat from "../../assets/bolimlar/talimNazorat.jpg";
import texnologiya from "../../assets/bolimlar/texnologiya.jpg";
import xojalik from "../../assets/bolimlar/xojalik.jpg";

const TarkibiyBolimlarPage = () => {
  return (
      <div className="main-page" id="tarkibiy-bolimlar-page">
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
                <li>Tarkibiy Bo'limlar</li>
              </ul>
              <h2>Tarkibiy Bo'limlar</h2>
            </div>
          </section>

          <section className="main-page-content">
            <div className="main-page-content-left row">
              <div className="kafedralar-item-wrapper col-12 col-xl-4 col-sm6">
                <div className="kafedralar-item-header">
                  <img src={akademikFaoliyat} alt="aniq fanlar"/>
                </div>
                <div className="kafedralar-item-content-wrapper">
                  <h5>Akademik faoliyatni muvofiqlashtirish bo'limi</h5>
                  <NavLink to={"/institut/kafedralar/aniq-fanlar/"}>Batafsil <i
                      className="fa-solid fa-arrow-right"></i>
                  </NavLink>
                </div>
              </div>
              <div className="kafedralar-item-wrapper col-12 col-xl-4 col-sm6">
                <div className="kafedralar-item-header">
                  <img src={fanlar} alt="aniq fanlar"/>
                </div>
                <div className="kafedralar-item-content-wrapper">
                  <h5>Fanlarni rivojlantirish bo'limi</h5>
                  <NavLink to={"/institut/kafedralar/aniq-fanlar/"}>Batafsil <i
                      className="fa-solid fa-arrow-right"></i>
                  </NavLink>
                </div>
              </div>
              <div className="kafedralar-item-wrapper col-12 col-xl-4 col-sm6">
                <div className="kafedralar-item-header">
                  <img src={kasbiyTalim} alt="aniq fanlar"/>
                </div>
                <div className="kafedralar-item-content-wrapper">
                  <h5>Uzluksiz kasbiy ta'limni tashkil etish bo'limi</h5>
                  <NavLink to={"/institut/kafedralar/aniq-fanlar/"}>Batafsil <i
                      className="fa-solid fa-arrow-right"></i>
                  </NavLink>
                </div>
              </div>
              <div className="kafedralar-item-wrapper col-12 col-xl-4 col-sm6">
                <div className="kafedralar-item-header">
                  <img src={maktabgachaTalim} alt="aniq fanlar"/>
                </div>
                <div className="kafedralar-item-content-wrapper">
                  <h5>Maktabgacha ta'limni muvofiqlashtirish bo'limi</h5>
                  <NavLink to={"/institut/kafedralar/aniq-fanlar/"}>Batafsil <i
                      className="fa-solid fa-arrow-right"></i>
                  </NavLink>
                </div>
              </div>
              <div className="kafedralar-item-wrapper col-12 col-xl-4 col-sm6">
                <div className="kafedralar-item-header">
                  <img src={metodikXizmat} alt="aniq fanlar"/>
                </div>
                <div className="kafedralar-item-content-wrapper">
                  <h5>Metodik xizmat ko'rsatish bo'limi</h5>
                  <NavLink to={"/institut/kafedralar/aniq-fanlar/"}>Batafsil <i
                      className="fa-solid fa-arrow-right"></i>
                  </NavLink>
                </div>
              </div>
              <div className="kafedralar-item-wrapper col-12 col-xl-4 col-sm6">
                <div className="kafedralar-item-header">
                  <img src={moliya} alt="aniq fanlar"/>
                </div>
                <div className="kafedralar-item-content-wrapper">
                  <h5>Moliya iqtisod va buxgalteriya bo'limi</h5>
                  <NavLink to={"/institut/kafedralar/aniq-fanlar/"}>Batafsil <i
                      className="fa-solid fa-arrow-right"></i>
                  </NavLink>
                </div>
              </div>
              <div className="kafedralar-item-wrapper col-12 col-xl-4 col-sm6">
                <div className="kafedralar-item-header">
                  <img src={talimNazorat} alt="aniq fanlar"/>
                </div>
                <div className="kafedralar-item-content-wrapper">
                  <h5>Ta'lim sifati nazorati bo'limi</h5>
                  <NavLink to={"/institut/kafedralar/aniq-fanlar/"}>Batafsil <i
                      className="fa-solid fa-arrow-right"></i>
                  </NavLink>
                </div>
              </div>
              <div className="kafedralar-item-wrapper col-12 col-xl-4 col-sm6">
                <div className="kafedralar-item-header">
                  <img src={texnologiya} alt="aniq fanlar"/>
                </div>
                <div className="kafedralar-item-content-wrapper">
                  <h5>Raqamli texnologiyalarni rivojlantirish bo'limi</h5>
                  <NavLink to={"/institut/kafedralar/aniq-fanlar/"}>Batafsil <i
                      className="fa-solid fa-arrow-right"></i>
                  </NavLink>
                </div>
              </div>
              <div className="kafedralar-item-wrapper col-12 col-xl-4 col-sm6">
                <div className="kafedralar-item-header">
                  <img src={xojalik} alt="aniq fanlar"/>
                </div>
                <div className="kafedralar-item-content-wrapper">
                  <h5>Xo'jalik ishlari bo'limi</h5>
                  <NavLink to={"/institut/kafedralar/aniq-fanlar/"}>Batafsil <i
                      className="fa-solid fa-arrow-right"></i>
                  </NavLink>
                </div>
              </div>
            </div>
            <PageSideMenu title={"Markaz"} active="Tarkibiy bo'limlar"
                          links={markazLinks}/>
          </section>
        </div>

        <Footer/>
        <Marquee/>
      </div>)
};

export default TarkibiyBolimlarPage;
