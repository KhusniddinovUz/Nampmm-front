import React, {useEffect, useState} from 'react';
import "./NewsSection.css";
import {NavLink} from "react-router";
import axios from "axios";

const formatDate = (dateString) => {
  const monthsUz = ["Yanvar", "Fevral", "Mart", "Aprel", "May", "Iyun", "Iyul", "Avgust", "Sentyabr", "Oktyabr", "Noyabr", "Dekabr"];
  const d = new Date(dateString);

  if (isNaN(d)) return "";

  const day = d.getDate().toString().padStart(2, "0");
  const month = monthsUz[d.getMonth()];

  return `${day} ${month}, ${d.getFullYear()}`;
}

const NewsCard = ({item, featured}) => (
    <article className={`news-card${featured ? " news-card--featured" : ""}`}>
      <NavLink to={"/news/" + item["slug"]} className="news-card-link">
        <div className="news-card-thumb">
          <img src={item["image_url"]} alt={item["title"]} className="news-card-image"
               loading="lazy"/>
        </div>
        <div className="news-card-body">
          <h3 className="news-card-title">{item["title"]}</h3>
        </div>
        <div className="news-card-meta">
          <span>
            <i className="fa-regular fa-calendar"></i>
            {formatDate(item["created_at"])}
          </span>
          <span>
            <i className="fa-regular fa-eye"></i>
            {item["view_count"]}
          </span>
        </div>
      </NavLink>
    </article>
);

const NewsCardSkeleton = ({featured}) => (
    <article
        className={`news-card news-card--skeleton${featured ? " news-card--featured" : ""}`}>
      <div className="news-card-link">
        <div className="news-card-thumb"></div>
        <div className="news-card-body">
          <span className="skeleton-line"></span>
          <span className="skeleton-line skeleton-line--short"></span>
        </div>
        <div className="news-card-meta">
          <span className="skeleton-line skeleton-line--meta"></span>
        </div>
      </div>
    </article>
);

const NewsSection = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("https://api2.mahoratmarkaz.uz/api/homepage-news/").then(res => {
      setNews(Array.isArray(res.data) ? res.data : []);
    }).catch(err => {
      console.log(err, "Homepage news fetch error");
    }).finally(() => {
      setLoading(false);
    });
  }, []);

  const bigNews = news.find(item => item["main_news"]) || news[0];
  const smallNews = news.filter(item => item !== bigNews).slice(0, 4);

  return (
      <section id="news" className="news-section">
        <div className="news-section-title">
          <h1>Yangiliklar</h1>
          <div className="news-section-title-divider"></div>
          <NavLink to={"/news"}>
            Barchasi <i className="fa-solid fa-arrow-right"></i>
          </NavLink>
        </div>

        <div className="news-grid">
          {loading ? (<>
            <NewsCardSkeleton featured/>
            {Array.from({length: 4}).map((_, index) => (
                <NewsCardSkeleton key={index}/>))}
          </>) : (<>
            {bigNews && <NewsCard item={bigNews} featured/>}
            {smallNews.map(item => (<NewsCard key={item["id"]} item={item}/>))}
          </>)}
        </div>
      </section>
  )
};

export default NewsSection;
