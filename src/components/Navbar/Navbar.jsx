import React, {useState, useEffect} from "react";
import {NavLink} from "react-router";
import {HashLink} from "react-router-hash-link";
import "./Navbar.css";
import navbarLogo from "../../assets/logo.png";
import {motion, AnimatePresence} from "framer-motion";
import {Accordion, AccordionItem} from '@szhsin/react-accordion';

const Navbar = (props) => {
  const [sticky, setSticky] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setSticky(window.scrollY > 100);
    window.addEventListener("scroll", onScroll);
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("no-scroll", mobileMenuOpen);
    document.body.classList.toggle("no-scroll", mobileMenuOpen);

    return () => {
      // ensure cleanup on unmount
      document.documentElement.classList.remove("no-scroll");
      document.body.classList.remove("no-scroll");
    };
  }, [mobileMenuOpen]);

  return (
      <header
          className={"header" + `${sticky ? " sticky" : ""}`}
          style={{color: "#fff", ...props.style}}
      >
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
                  <a href="https://portal.mahoratmarkaz.uz/auth"
                     target="_blank">PORTAL</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mobile-menu-topbar">
            <i
                className="fa-solid fa-bars"
                onClick={() => setMobileMenuOpen(true)}
            ></i>
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
                      <span style={{fontFamily: "Poppins"}}>
                      NAMANGAN VILOYATI PEDAGOGIK MAHORAT MARKAZI
                    </span>
                    </NavLink>
                  </div>
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
                              <NavLink to="/institut/haqida">Markaz haqida</NavLink>
                            </li>
                            <li>
                              <NavLink to="/institut/rahbariyat">
                                Rahbariyat
                              </NavLink>
                            </li>
                            <li>
                              <NavLink to="/institut/tuzilma">Markaz tuzilmasi</NavLink>
                            </li>
                            <li>
                              <NavLink to="/institut/hamkorlik">Xalqaro
                                hamkorlik</NavLink>
                            </li>
                            <li>
                              <NavLink to="/institut/ish-orinlari">
                                Bo'sh ish o'rinlari
                              </NavLink>
                            </li>
                            <li>
                              <NavLink to="/institut/tarkibiy-bolimlar">Tarkibiy
                                bo'limlar</NavLink>
                            </li>
                            <li>
                              <NavLink to="/institut/kafedralar">Kafedralar</NavLink>
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
                              <a href="https://portal.mahoratmarkaz.uz/auth"
                                 target="_blank">Davomat Platformasi</a>
                            </li>
                            <li>
                              <NavLink to="/sorovnoma">So'rovnoma</NavLink>
                            </li>
                            <li>
                              <NavLink to="/talim-xizmatlari/qayta-tayyorlash">Qayta
                                Tayyorlash</NavLink>
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
                              <a href="/respublika-konferensiyasi.pdf" target="_blank"
                                 target="_blank">E-Library</a>
                            </li>
                            <li>
                              <a href="https://drive.google.com/drive/folders/1JqwNmFoyAKzu6fyoc_euoKJix058E9xb/"
                                 target="_blank">Markaz Drive</a>
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
                            {/*<li>*/}
                            {/*  <NavLink to="/elonlar">E'lonlar</NavLink>*/}
                            {/*</li>*/}
                            {/*<li>*/}
                            {/*  <NavLink to="/brending">Brending</NavLink>*/}
                            {/*</li>*/}
                          </ul>
                        </li>
                        <li>
                          <NavLink to="/news">Yangiliklar</NavLink>
                        </li>
                        <li>
                          <HashLink smooth to="#footer-contacts">Bo'glanish</HashLink>
                        </li>
                      </ul>
                    </nav>
                  </div>
                  {/* End Main Menu */}
                </div>
                <div className="ms-5">
                  <div className="get-quote">
                    <a href="https://t.me/direktorga_bot" target="_blank">
                      <i className="fa-regular fa-envelope"></i>
                      Direktorga Ariza Yuborish
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* MOBILE SIDE MENU */}
        <AnimatePresence>
          {mobileMenuOpen && (<motion.div
              className="mobile-menu-page"
              key="mobileMenu"
              initial={{x: "-100%"}}
              animate={{x: 0}}
              exit={{x: "-100%"}}
              transition={{duration: 0.3, type: "tween", ease: "easeInOut"}}
          >
            <i
                className="fa-solid fa-xmark"
                onClick={() => setMobileMenuOpen(false)}
            ></i>

            <div className="logo">
              <NavLink to="/">
                <img src={navbarLogo} alt="navbar logo"/>
                <span style={{fontFamily: "Poppins"}}>
                      NAMANGAN VILOYATI <br/> PEDAGOGIK <br/> MAHORAT MARKAZI
                    </span>
              </NavLink>
            </div>

            <Accordion>
              <nav className="mobile-menu-nav">
                <AccordionItem className="dropdown-button" header="Markaz">
                  <ul id="markazMenu" className="mobile-menu-dropdown">
                    <li>
                      <NavLink to="/institut/haqida">Markaz haqida</NavLink>
                    </li>
                    <li>
                      <NavLink to="/institut/rahbariyat">
                        Rahbariyat
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/institut/tuzilma">Markaz tuzilmasi</NavLink>
                    </li>
                    <li>
                      <NavLink to="/institut/hamkorlik">Xalqaro hamkorlik</NavLink>
                    </li>
                    <li>
                      <NavLink to="/institut/ish-orinlari">
                        Bo'sh ish o'rinlari
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/institut/tarkibiy-bolimlar">Tarkibiy
                        bo'limlar</NavLink>
                    </li>
                    <li>
                      <NavLink to="/institut/kafedralar">Kafedralar</NavLink>
                    </li>
                  </ul>
                </AccordionItem>
                <AccordionItem className="dropdown-button" header="Ta'lim Xizmatlari">
                  <ul className="mobile-menu-dropdown">
                    <li>
                      <a href="https://portal.mahoratmarkaz.uz/auth"
                         target="_blank">Davomat Platformasi</a>
                    </li>
                    <li>
                      <NavLink to="/sorovnoma">So'rovnoma</NavLink>
                    </li>
                    <li>
                      <NavLink to="/talim-xizmatlari/qayta-tayyorlash">Qayta
                        Tayyorlash</NavLink>
                    </li>
                  </ul>
                </AccordionItem>
                <AccordionItem className="dropdown-button" header="Arm">
                  <ul className="mobile-menu-dropdown">
                    <li>
                      <a href="/respublika-konferensiyasi.pdf" target="_blank"
                         target="_blank">E-Library</a>
                    </li>
                    <li>
                      <a href="https://drive.google.com/drive/folders/1JqwNmFoyAKzu6fyoc_euoKJix058E9xb/"
                         target="_blank">Markaz Drive</a>
                    </li>
                  </ul>
                </AccordionItem>
                <AccordionItem className="dropdown-button" header="Media Resurslar">
                  <ul className="mobile-menu-dropdown">
                    <li>
                      <NavLink to="/photos">Fotogalareya</NavLink>
                    </li>
                    <li>
                      <NavLink to="/videos">Videogalareya</NavLink>
                    </li>
                    {/*<li>*/}
                    {/*  <NavLink to="/elonlar">E'lonlar</NavLink>*/}
                    {/*</li>*/}
                    {/*<li>*/}
                    {/*  <NavLink to="/brending">Brending</NavLink>*/}
                    {/*</li>*/}
                  </ul>
                </AccordionItem>
                <NavLink to="/news" onClick={() => setMobileMenuOpen(false)}
                         className="dropdown-button">
                  Yangiliklar
                </NavLink>
                <a href="#footer-contacts" onClick={() => setMobileMenuOpen(false)}
                   className="dropdown-button">
                  Bog'lanish
                </a>
              </nav>
            </Accordion>
            <div className="get-quote">
              <a href="https://t.me/direktorga_bot" target="_blank">
                <i className="fa-regular fa-envelope"></i>
                Direktorga Ariza Yuborish
              </a>
            </div>
          </motion.div>)}
        </AnimatePresence>
      </header>
  );
};

export default Navbar;
