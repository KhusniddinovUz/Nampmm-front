import React from 'react';
import logo from "../../assets/logo.png";
import OwlCarousel from "react-owl-carousel";
import gerb from "../../assets/gerb.png";
import mygov from "../../assets/mygov.png";
import talim from "../../assets/talim.png";
import "./Footer.css";

const Footer = () => {
  return (
      <footer>
        <div id="footer-contacts">
          <div className="footer-contacts-image">
            <img src={logo} alt="logo"/>
            <p>
              NAMANGAN VILOYATI PEDAGOGIK MAHORAT MARKAZI
            </p>
          </div>
          <div className="footer-contact-item-wrapper">
            <div className="footer-contact-item">
              <h5>Telfon raqam:</h5>
              <p>+998 55 508 06 07</p>
            </div>
            <div className="footer-contact-item">
              <h5>Email:</h5>
              <p>info@avloniy.uz</p>
            </div>
            <div className="footer-contact-item">
              <h5>Manzil:</h5>
              <p>Namangan shahar, Mustaqillik ko'cha 1-uy</p>
            </div>
          </div>
        </div>
        <div id="government-contacts">
          <div className="footer-useful">
            <OwlCarousel
                className="owl-carousel owl-theme"
                id="c-useful"
                loop={true}
                nav={false}
                autoplay={true}
                autoplayTimeout={3000}
                dots={false}
                responsiveClass={true}
                responsive={{
                  0: {items: 1}, 520: {items: 2}, 768: {items: 3}, 992: {items: 4}
                }}
            >
              <div className="item">
                <a href="https://president.uz" target="_blank"
                   className="footer-useful-item">
                  <div className="footer-useful-item-image">
                    <img src={gerb} alt="useful"/>
                  </div>
                  <div className="footer-useful-item-info">
                    <span>Oʻzbekiston Respublikasi Prezidentining rasmiy veb-sayti</span>
                    <small> president.uz <i
                        className="fa-solid fa-up-right-from-square"></i> </small>
                  </div>
                </a>
              </div>
              <div className="item">
                <a href="https://my.gov.uz" target="_blank"
                   className="footer-useful-item">
                  <div className="footer-useful-item-image">
                    <img src={mygov} alt="useful"/>
                  </div>
                  <div className="footer-useful-item-info">
                                    <span
                                    >Yagona interaktiv davlat <br/>
                                        xizmatlari portali</span
                                    >
                    <small> my.gov.uz <i className="fa-solid fa-up-right-from-square"></i>
                    </small>
                  </div>
                </a>
              </div>
              <div className="item">
                <a href="https://edu.uz" target="_blank" className="footer-useful-item">
                  <div className="footer-useful-item-image">
                    <img src={gerb} alt="useful"/>
                  </div>
                  <div className="footer-useful-item-info">
                    <span>Oʻzbekiston Respublikasi Oliy taʼlim, fan va innovatsiyalar vazirligi</span>
                    <small> edu.uz <i className="fa-solid fa-up-right-from-square"></i>
                    </small>
                  </div>
                </a>
              </div>
              <div className="item">
                <a href="https://uzedu.uz" target="_blank" className="footer-useful-item">
                  <div className="footer-useful-item-image">
                    <img src={talim} alt="useful"/>
                  </div>
                  <div className="footer-useful-item-info">
                    <span>Maktabgacha va maktab taʼlimi vazirigi</span>
                    <small> uzedu.uz <i className="fa-solid fa-up-right-from-square"></i>
                    </small>
                  </div>
                </a>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </footer>
  );
};

export default Footer;
