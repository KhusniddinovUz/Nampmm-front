import React from 'react';
import banner from "../../assets/rahbariyat/banner.jpg";
import bannerVector from "../../assets/rahbariyat/banner-vector.png";
import bannerBuilding from "../../assets/rahbariyat/banner-building.svg";
import {NavLink} from "react-router";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer.jsx";
import Marquee from "../../components/Marquee/Marquee.jsx";
import "./QaytaTayyorlashPage.css";
import image1 from "../../assets/qayta-tayyorlash/1.jpg";
import image2 from "../../assets/qayta-tayyorlash/2.jpg";
import image3 from "../../assets/qayta-tayyorlash/3.jpg";
import image4 from "../../assets/qayta-tayyorlash/4.jpg";
import image5 from "../../assets/qayta-tayyorlash/5.jpg";


const QaytaTayyorlashPage = () => {


  return (
      <div id="qayta-tayyorlash" className="leadership-page-wrapper">
        <Navbar style={{color: "#002d6d"}}/>

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
              <li>Qayta Tayyorlash</li>
            </ul>
            <h2>Qayta Tayyorlash</h2>
          </div>
        </section>

        <div className='page-inner-container'>
          <div className="qayta-tayyorlash-content-wrapper">
            <h2>Mutaxassislarni kasbiy hamda pedagogik qayta tayyorlash yo‘nalishlari</h2>
            <div className="qayta-tayyorlash-images-container">
              <img src={image1} alt="image 1"/>
              <img src={image2} alt="image 2"/>
              <img src={image3} alt="image 3"/>
              <img src={image4} alt="image 4"/>
              <img src={image5} alt="image 5"/>

            </div>
          </div>
        </div>


        <Footer/>
        <Marquee/>
      </div>)
};

export default QaytaTayyorlashPage;
