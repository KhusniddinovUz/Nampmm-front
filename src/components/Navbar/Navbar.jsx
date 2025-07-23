import React, {useState, useEffect} from "react";
import {NavLink} from "react-router";
import "./Navbar.css";
import navbarLogo from "../../assets/logo.png";

const Navbar = (props) => {
  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    const onScroll = () => setSticky(window.scrollY > 100);
    window.addEventListener("scroll", onScroll);
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
      <header className={"header" + `${sticky ? " sticky" : ""}`}
              style={{color: "#fff", ...props.style}}>
        <div className="topbar">
          <div className="d-flex ms-3">
            <div className="topbar-icons-wrapper">
              <ul className="top-contact">
                <li>
                  <i className="fa-brands fa-facebook fa-2x"></i>
                </li>
                <li>
                  <i className="fa-brands fa-instagram fa-2x"></i>
                </li>
                <li>
                  <i className="fa-brands fa-youtube fa-2x"></i>
                </li>
                <li>
                  <i className="fa-brands fa-twitter fa-2x"></i>
                </li>
                <li>
                  <i className="fa-brands fa-telegram fa-2x"></i>
                </li>
              </ul>
            </div>
            <div className="ms-1 row align-content-center top-link-wrapper">
              <ul className="top-link">
                <li>
                  <a href="#">PORTAL</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* INNER HEADER */}
        <div className="header-inner">
          <div className="conntainer">
            <div className="inner">
              <div className="nav-container">
                <div className="me-5">
                  <div className="logo">
                    <NavLink to="/">
                      <img src={navbarLogo} alt="navbar logo"/>
                      <span>NAMANGAN VILOYATI PEDAGOGIK MAHORAT MARKAZI</span>
                    </NavLink>
                  </div>
                  {/* Mobile Nav */}
                  <div className="mobile-nav"></div>
                  {/* End Mobile Nav */}
                </div>
                <div className="main-menu-container">
                  {/* Main Menu */}
                  <div className="main-menu">
                    <nav className="navigation">
                      <ul className="nav menu">
                        <li>
                          <a href="#">
                            Markaz
                            <i className="fa-solid fa-chevron-down"></i>
                          </a>
                          <ul className="dropdown">
                            <li>
                              <a href="../../../index.html">Markaz
                                haqida</a>
                            </li>
                            <li>
                              <NavLink to="institut/rahbariyat">Rahbariyat</NavLink>
                            </li>
                            <li>
                              <a href="../../../index.html">Markaz
                                tuzilmasi</a>
                            </li>
                            <li>
                              <a href="../../../index.html">Xalqaro
                                hamkorlik</a>
                            </li>
                            <li>
                              <a href="../../../index.html">Bo'sh ish
                                o'rinlari</a>
                            </li>
                            <li>
                              <a href="../../../index.html">Tarkibiy
                                bo'limlar</a>
                            </li>
                            <li>
                              <a href="../../../index.html">Kafedralar</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="#">
                            Ta'lim Xizmatlari{" "}
                            <i className="fa-solid fa-chevron-down"></i>
                          </a>
                          <ul className="dropdown">
                            <li>
                              <a href="#">Davlat Platformasi</a>
                            </li>
                            <li>
                              <a href="#">So'rovnoma</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="#">
                            Arm
                            <i className="fa-solid fa-chevron-down"></i>
                          </a>
                          <ul className="dropdown">
                            <li>
                              <a href="#">E-Library</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="#">
                            Media Resurslar{" "}
                            <i className="fa-solid fa-chevron-down"></i>
                          </a>
                          <ul className="dropdown">
                            <li>
                              <a href="#">Fotogalareya</a>
                            </li>
                            <li>
                              <a href="#">Videogalareya</a>
                            </li>
                            <li>
                              <a href="#">E'lonlar</a>
                            </li>
                            <li>
                              <a href="#">Brending</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="#news">Yangiliklar</a>
                        </li>
                        <li>
                          <a href="#footer-contacts">Bo'glanish</a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                  {/* End Main Menu */}
                </div>
                <div className="ms-5">
                  <div className="get-quote">
                    <a
                        href="https://t.me/direktorga_bot"
                        target="_blank"
                        className="btn"
                    >
                      <i className="fa-regular fa-envelope"></i>
                      Direktorga Ariza Yuborish
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>);
};

export default Navbar;
