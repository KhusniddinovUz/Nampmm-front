import React from 'react';
import "./NewsSection.css";
import news1 from "../../assets/news/news1.jpg";
import news2 from "../../assets/news/news2.jpg";
import news3 from "../../assets/news/news3.jpg";
import news4 from "../../assets/news/news4.jpg";
import news5 from "../../assets/news/news5.jpg";


const NewsSection = () => {
  return (
      <section id="news" className="speakers section-padding">
        <h1>Yangiliklar</h1>
        <div className="row justify-content-center align-items-stretch">

          {/* MAIN NEWS  */}
          <div className="col-lg-6 col-12">
            <a href="#">
              <div className="speakers-thumb">
                <img src={news1} alt="news image"
                     className="img-fluid speakers-image"/>
              </div>
              <div className="speakers-content">
                <h3>TA'LIM VAZIRI NAMANGAN VILOYATIDA</h3>
              </div>
            </a>
          </div>

          <div className="col-lg-6 col-12">
            <div id="small-news"
                 className="row justify-content-between align-items-stretch">

              {/* SMALL NEWS#1  */}
              <div className="col-lg-6 col-md-6 col-12">
                <a href="#">
                  <div className="speakers-thumb speakers-thumb-small">
                    <img src={news3} className="img-fluid speakers-image"
                         alt=""/>
                  </div>
                  <div className="speakers-content">
                    <h3>Ta'lim sifatini oshirish va o'qituvchilarning kasbiy mahoratini
                      rivojlantirish uchun qulay sharoitlar yaratish</h3>
                  </div>
                </a>
              </div>


              {/* SMALL NEWS#2  */}
              <div className="col-lg-6 col-md-6 col-12 d-flex">
                <a href="#">
                  <div className="speakers-thumb speakers-thumb-small">
                    <img src={news2} className="img-fluid speakers-image"
                         alt=""/>
                  </div>
                  <div className="speakers-content">
                    <h3>Qoraqalpog‘iston Respublikasida PISA 2025</h3>
                  </div>
                </a>
              </div>


              {/* SMALL NEWS#3 */}
              <div className="col-lg-6 col-md-6 col-12">
                <a href="#">
                  <div className="speakers-thumb speakers-thumb-small">
                    <img src={news4} className="img-fluid speakers-image"
                         alt=""/>
                  </div>
                  <div className="speakers-content">
                    <h3>Hokimlar o‘quvchilarga omad tiladi</h3>
                  </div>
                </a>
              </div>


              {/* SMALL NEWS#4 */}
              <div className="col-lg-6 col-md-6 col-12">
                <a href="#">
                  <div className="speakers-thumb speakers-thumb-small">
                    <img src={news5} className="img-fluid speakers-image"
                         alt=""/>
                  </div>
                  <div className="speakers-content">
                    <h3>PISA 2025 xalqaro baholash dasturi</h3>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
};

export default NewsSection;
