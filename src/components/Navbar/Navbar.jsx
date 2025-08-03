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
                      <span style={{fontFamily: "Poppins"}}>NAMANGAN VILOYATI PEDAGOGIK MAHORAT MARKAZI</span>
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
                          <NavLink to="/">
                            Markaz
                            <i className="fa-solid fa-chevron-down"></i>
                          </NavLink>
                          <ul className="dropdown">
                            <li>
                              <NavLink to="/haqida">Markaz haqida</NavLink>
                            </li>
                            <li>
                              <NavLink to="institut/rahbariyat">Rahbariyat</NavLink>
                            </li>
                            <li>
                              <NavLink to="/tuzilma">Markaz tuzilmasi</NavLink>
                            </li>
                            <li>
                              <NavLink to="/hamkorlik">Xalqaro hamkorlik</NavLink>
                            </li>
                            <li>
                              <NavLink to="/ish-orinlari">Bo'sh ish o'rinlari</NavLink>
                            </li>
                            <li>
                              <NavLink to="/bolimlar">Tarkibiy bo'limlar</NavLink>
                            </li>
                            <li>
                              <NavLink to="/kafedralar">Kafedralar</NavLink>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <NavLink to="/">
                            Ta'lim Xizmatlari
                            <i className="fa-solid fa-chevron-down"></i>
                          </NavLink>
                          <ul className="dropdown">
                            <li>
                              <NavLink to="/davlat-platformasi">Davlat
                                Platformasi</NavLink>
                            </li>
                            <li>
                              <NavLink to="/sorovnoma">So'rovnoma</NavLink>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <NavLink to="/">
                            Arm
                            <i className="fa-solid fa-chevron-down"></i>
                          </NavLink>
                          <ul className="dropdown">
                            <li>
                              <NavLink to="/elibrary">E-Library</NavLink>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <NavLink to="/">
                            Media Resurslar
                            <i className="fa-solid fa-chevron-down"></i>
                          </NavLink>
                          <ul className="dropdown">
                            <li>
                              <NavLink to="/photos">Fotogalareya</NavLink>
                            </li>
                            <li>
                              <NavLink to="/videos">Videogalareya</NavLink>
                            </li>
                            <li>
                              <NavLink to="/elonlar">E'lonlar</NavLink>
                            </li>
                            <li>
                              <NavLink to="/brending">Brending</NavLink>
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
      </header>
  );
};

export default Navbar;
