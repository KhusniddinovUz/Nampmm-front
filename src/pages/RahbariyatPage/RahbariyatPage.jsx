import React from 'react';
import {NavLink} from "react-router";
import "./RahbariyatPage.css";
import Navbar from "../../components/Navbar/Navbar.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import banner from "../../assets/rahbariyat/banner.jpg";
import bannerBuilding from "../../assets/rahbariyat/banner-building.svg";
import bannerVector from "../../assets/rahbariyat/banner-vector.png";
import person from "../../assets/rahbariyat/person.jpg";
import leader from "../../assets/rahbariyat/leader.jpg";
import rahbariyatVector from "../../assets/rahbariyat/rahbariyat-vector.png";
import logo from "../../assets/logo.png";
import PageSideMenu from "../../components/PageSideMenu/PageSideMenu.jsx";

const RahbariyatPage = () => {
  return (
      <div className="leadership-page-wrapper">
        <Navbar style={{color: "#002d6d"}}/>

        <section id="leadership-header">
          <div className="header-background">
            <div className="header-background-image">
              <img src={banner} alt="banner-image"/>
            </div>
            <div className="header-background-icon">
              <img className="header-vector" src={bannerVector}
                   alt="banner-vector"/>
              <img className="header-banner-icon"
                   src={bannerBuilding} alt="banner-building"/>
            </div>
          </div>
          <div className="header-content">
            <ul>
              <li>
                <NavLink to={"/"}>Asosiy sahifa</NavLink>
                <i className="fa-solid fa-caret-right"></i>
              </li>
              <li>
                <NavLink to={"/"}>Institut</NavLink>
                <i className="fa-solid fa-caret-right"></i>
              </li>
              <li>Rahbariyat</li>
            </ul>
            <h2>Rahbariyat</h2>
          </div>
        </section>

        <div className="page-inner-container">
          <div className="page-inner">
            <main className="leadership-page">
              <div className="page-content">
                <div className="row">
                  <div className="col-12">
                    <div className="leader-banner rahbar-banner">
                      <div className="details">
                        <h3 className="name">Rajabov Sherzod Umurzoqovich</h3>
                        <p className="role">Pedagogik innovatsiyalar bo‘yicha
                          prorektor</p>

                        <div className="divider"></div>

                        <div className="contact-row">
                          <a href="tel:+998555080667" className="pill">
                            <i style={{color: "rgba(20, 95, 203, 1)"}}
                               className="fa-solid fa-phone"></i>
                            +998 55 508 06‑67 (1003)
                          </a>
                          <a href="mailto:info@avloniy.uz" className="pill">
                            <i style={{color: "rgba(15, 190, 85, 1)"}}
                               className="fa-solid fa-envelope"></i>
                            info@avloniy.uz
                          </a>
                        </div>

                        <div className="btn-row">
                          <button className="dropdown-btn">
                            Mehnat faoliyati
                            <i className="fa-solid fa-caret-down"></i>
                          </button>
                          <button className="dropdown-btn">
                            Vazifalari
                            <i className="fa-solid fa-caret-down"></i>
                          </button>
                        </div>
                      </div>
                      <div className="photo">
                        <div>
                          <img src={rahbariyatVector} alt=""/>
                          <img src={logo} alt=""/>
                        </div>
                        <img src={leader} alt="Prorector"/>
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="leader-banner">
                      <div className="photo">
                        <img src={person} alt="Prorector"/>
                      </div>
                      <div className="details">
                        <h3 className="name">Rajabov Sherzod Umurzoqovich</h3>
                        <p className="role">Pedagogik innovatsiyalar bo‘yicha
                          prorektor</p>

                        <div className="divider"></div>

                        <div className="contact-row">
                          <a href="tel:+998555080667" className="pill">
                            <i style={{color: "rgba(20, 95, 203, 1)"}}
                               className="fa-solid fa-phone"></i>
                            +998 55 508 06‑67 (1003)
                          </a>
                          <a href="mailto:info@avloniy.uz" className="pill">
                            <i style={{color: "rgba(15, 190, 85, 1)"}}
                               className="fa-solid fa-envelope"></i>
                            info@avloniy.uz
                          </a>
                        </div>

                        <div className="btn-row">
                          <button className="dropdown-btn">
                            Mehnat faoliyati
                            <i className="fa-solid fa-caret-down"></i>
                          </button>
                          <button className="dropdown-btn">
                            Vazifalari
                            <i className="fa-solid fa-caret-down"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="leader-banner">
                      <div className="photo">
                        <img src={person} alt="Prorector"/>
                      </div>
                      <div className="details">
                        <h3 className="name">Rajabov Sherzod Umurzoqovich</h3>
                        <p className="role">Pedagogik innovatsiyalar bo‘yicha
                          prorektor</p>

                        <div className="divider"></div>

                        <div className="contact-row">
                          <a href="tel:+998555080667" className="pill">
                            <i style={{color: "rgba(20, 95, 203, 1)"}}
                               className="fa-solid fa-phone"></i>
                            +998 55 508 06‑67 (1003)
                          </a>
                          <a href="mailto:info@avloniy.uz" className="pill">
                            <i style={{color: "rgba(15, 190, 85, 1)"}}
                               className="fa-solid fa-envelope"></i>
                            info@avloniy.uz
                          </a>
                        </div>

                        <div className="btn-row">
                          <button className="dropdown-btn">
                            Mehnat faoliyati
                            <i className="fa-solid fa-caret-down"></i>
                          </button>
                          <button className="dropdown-btn">
                            Vazifalari
                            <i className="fa-solid fa-caret-down"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </main>

            <PageSideMenu title="Institut"/>

          </div>
        </div>

        <Footer/>
      </div>
  )
};

export default RahbariyatPage;
