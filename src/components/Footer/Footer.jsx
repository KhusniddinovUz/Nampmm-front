import React, {useEffect, useState} from 'react';
import logo from "../../assets/logo.png";
import OwlCarousel from "react-owl-carousel";
import {Counter} from "counterapi";
import gerb from "../../assets/gerb.png";
import mygov from "../../assets/mygov.png";
import talim from "../../assets/talim.png";
import "./Footer.css";
import ContactForm from "../ContactForm/ContactForm.jsx";


const Footer = () => {
  const counter = new Counter({workspace: 'nampmm-views'});
  const [viewCount, setViewCount] = useState(0);
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(350);

  const handleLikeClick = () => {
    localStorage.setItem("liked", "1");
    setLiked(true);
    counter.up("nampmmlikecount").then(data => {
      console.log(data.data.up_count, "like updated");
      if (likeCount === data.data.up_count) {
        setLikeCount(prevState => prevState + 1);
      } else {
        setLikeCount(data.data.up_count);
      }
    }).catch(err => {
      console.log("Like count update error: ", err);
    })
  }

  useEffect(() => {
    counter.get("nampmmpageviews").then(data => {
      setViewCount(data.data.up_count);
    });
    counter.get("nampmmlikecount").then(data => {
      setLikeCount(data.data.up_count);
    });
    if (localStorage.getItem("liked") === "1") {
      setLiked(true);
    }
  }, []);

  return (
      <footer>
        <div id="footer-contacts">
          <div className="footer-contacts-image">
            <img src={logo} alt="logo"/>
            <p>
              NAMANGAN VILOYATI <br/> PEDAGOGIK <br/> MAHORAT MARKAZI
            </p>
          </div>
          <div className="footer-contact-item-wrapper">
            <div className="footer-contact-item">
              <h5>Telfon raqam:</h5>
              <p>+998 69 234 37 11</p>
            </div>
            <div className="footer-contact-item">
              <h5>Email:</h5>
              <p>murodkhujaevs@gmail.com</p>
            </div>
            <div className="footer-contact-item">
              <h5>Manzil:</h5>
              <p>Islom Karimov ko'cha, 21-uy</p>
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
        <div className="footer-content">
          <div className="footer-buttons">
            <p>Sizga saytimiz manfaatli bo'ldimi?</p>
            {liked ? (
                <div className="liked-button-wrapper">
                  <i className="fa-solid fa-heart"></i>
                  <span>{likeCount}</span>
                </div>
            ) : (
                <div className="like-button-wrapper">
                  <i onClick={handleLikeClick} className="fa-regular fa-heart"></i>
                  <span>{likeCount}</span>
                </div>
            )}
            <div className="footer-buttons-views">
              <p>Oylik tashriflar soni</p>
              <div className="views-button-wrapper">
                <span>{viewCount}</span>
                <i className="fa-solid fa-eye"></i>
              </div>
            </div>
          </div>
          <div className="suggestion-form">
            <ContactForm/>
          </div>
          <div className="google-maps">
            <div className="map-wrapper">
              <iframe
                  src="https://yandex.com/map-widget/v1/org/namangan_region_institute_for_retraining_and_advanced_training_of_public_education_workers/67289918410/?ll=71.633641%2C41.005303&z=17.7"
                  width="300" height="250" frameBorder="1"
                  allowFullScreen={true}></iframe>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <p>
            Namangan Viloyati Pedagogik Mahorat Markazi © 2020-2025. Barcha huquqlar
            himoyalangan.
          </p>
          <p>
            Sayt yaratuvchisi: +998 77 111 11 24
          </p>
        </div>
      </footer>
  );
};

export default Footer;
