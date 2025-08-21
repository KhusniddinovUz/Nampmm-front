import React, {useEffect, useState} from 'react';
import "./NewsPage.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import axios from "axios";
import {NavLink} from "react-router";
import banner from "../../assets/rahbariyat/banner.jpg";
import bannerVector from "../../assets/rahbariyat/banner-vector.png";
import bannerBuilding from "../../assets/rahbariyat/banner-building.svg";

const NewsPage = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8008/api/articles').then(res => {
      setNews(res.data);
    })
  }, [])

  return (
      <div id="news-page">
        <Navbar style={{color: "#002d6d"}}/>
        <div className="news-page-content-wrapper">
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
                  <NavLink to={"/news"}>Yangiliklar</NavLink>
                </li>
              </ul>
              <h2>Yangiliklar</h2>
            </div>
          </section>
          <div className="news-page-content">
            <div className="news-item-wrapper">
              {news && news.map((item, index) => (<div className="news-item" key={index}>
                <NavLink to={"/news"}>
                  <div className="news-img-wrapper">
                    <img src={item["image_url"]} className="news-img"
                         alt=""/>
                  </div>
                  <div className="news-title-wrapper">
                    <p>{item["title"]}</p>
                  </div>
                </NavLink>
              </div>))}
            </div>
          </div>
        </div>
        <Footer/>
      </div>
  )
};

export default NewsPage;
