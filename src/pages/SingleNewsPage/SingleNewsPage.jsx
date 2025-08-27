import React, {useEffect, useState} from 'react'
import "./SingleNewsPage.css";
import {NavLink, useParams} from "react-router";
import Footer from "../../components/Footer/Footer.jsx";
import Navbar from "../../components/Navbar/Navbar.jsx";
import Marquee from "../../components/Marquee/Marquee.jsx";
import banner from "../../assets/rahbariyat/banner.jpg";
import bannerVector from "../../assets/rahbariyat/banner-vector.png";
import bannerBuilding from "../../assets/rahbariyat/banner-building.svg";
import axios from "axios";

const SingleNewsPage = () => {
  const {slug} = useParams();
  const [news, setNews] = useState({});

  useEffect(() => {
    axios.get('http://192.168.1.7:8008/api/news/' + slug).then(res => {
      setNews(res.data);
    }).catch(err => {
      console.log(err, "Single news page fetch error");
    })
  }, [])


  const formatDate = (dateString) => {
    const monthsUz = ["Yanvar", "Fevral", "Mart", "Aprel", "May", "Iyun", "Iyul", "Avgust", "Sentyabr", "Oktyabr", "Noyabr", "Dekabr"];
    const d = new Date(dateString);
    const time = d.toLocaleTimeString("uz-UZ", {
      hour: '2-digit', minute: '2-digit', hour12: false
    });
    const day = d.getDate().toString().padStart(2, "0");
    const month = monthsUz[d.getMonth()];

    return ` ${time} - ${day} ${month}`;
  }

  return (
      <div id="single-news-page">
        <Navbar style={{color: "#002d6d"}}/>
        <div className="single-news-page-content-wrapper">
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
          <div className="single-news-page-content">
            <div className="single-news-item">
              <h1>{news.title}</h1>
              <div className="single-news-page-date-views">
                <div>
                  <i className="fa-solid fa-calendar"></i>
                  <p>{formatDate(news["created_at"])}</p>
                </div>
                <div>
                  <i className="fa-solid fa-eye"></i>
                  <p>{news["view_count"]}</p>
                </div>
              </div>
              <div className="single-news-page-image-wrapper">
                <img src={news["image_url"]} alt={news["slug"]}/>
              </div>
              <p>{news.body}</p>
            </div>
          </div>
        </div>
        <Footer/>
        <Marquee/>
      </div>
  )
};

export default SingleNewsPage;
