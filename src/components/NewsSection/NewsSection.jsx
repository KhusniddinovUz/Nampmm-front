import React, {useEffect, useState} from 'react';
import "./NewsSection.css";
import {NavLink} from "react-router";
import axios from "axios";

const NewsSection = () => {
  const [smallNews, setSmallNews] = useState([]);
  const [bigNews, setBigNews] = useState({});

  useEffect(() => {
    axios.get("http://192.168.1.7:8008/api/homepage-news/").then(res => {
      const news = res.data;
      news.map(item => {
        if (item["main_news"]) {
          setBigNews(item);
        } else {
          setSmallNews(prevState => [...prevState, item]);
        }
      });
    })
  }, []);

  return (
      <section id="news" className="speakers section-padding">
        <div className="speakers-title">
          <h1>Yangiliklar</h1>
          <div className="speakers-title-divider"></div>
          <NavLink to={"/news"}>
            Barchasi <i className="fa-solid fa-arrow-right"></i>
          </NavLink>
        </div>
        <div className="row justify-content-center align-items-stretch">
          {/* MAIN NEWS  */}
          {bigNews && (
              <div className="col-lg-6 col-12">
                <NavLink to={"/news"}>
                  <div className="speakers-thumb">
                    <img src={bigNews["image_url"]} alt="news image"
                         className="img-fluid speakers-image"/>
                  </div>
                  <div className="speakers-content">
                    <h3>{bigNews["title"]}</h3>
                  </div>
                </NavLink>
              </div>
          )}
          <div className="col-lg-6 col-12">
            <div id="small-news"
                 className="row justify-content-between align-items-stretch">
              {/* SMALL NEWS */}
              {smallNews && smallNews.map((item, index) => (
                  <div key={index} className="col-lg-6 col-md-6 col-12">
                    <NavLink to={"/news"}>
                      <div className="speakers-thumb speakers-thumb-small">
                        <img src={item["image_url"]} className="img-fluid speakers-image"
                             alt=""/>
                      </div>
                      <div className="speakers-content">
                        <h3>{item["title"]}</h3>
                      </div>
                    </NavLink>
                  </div>
              ))}
            </div>
          </div>
        </div>
      </section>
  )
};

export default NewsSection;
