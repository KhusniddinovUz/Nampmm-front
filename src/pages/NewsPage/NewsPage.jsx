import React, {useEffect, useState} from 'react';
import "./NewsPage.css";
import banner from "../../assets/rahbariyat/banner.jpg";
import bannerVector from "../../assets/rahbariyat/banner-vector.png";
import bannerBuilding from "../../assets/rahbariyat/banner-building.svg";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Marquee from "../../components/Marquee/Marquee.jsx";
import axios from "axios";
import {NavLink} from "react-router";
import ReactPaginate from "react-paginate";

const NewsPage = () => {
  const [news, setNews] = useState([]);
  const [page, setPage] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const [currentItems, setCurrentItems] = useState([]);
  const [start, setStart] = useState(0);

  useEffect(() => {
    axios.get('https://api2.mahoratmarkaz.uz/api/articles').then(res => {
      setNews(res.data);
    }).catch(err => {
      console.log(err, "News page fetch error");
    })
  }, [])

  useEffect(() => {
    setPageCount(Math.ceil(news.length / 12));
    setStart(page * 12);
    setCurrentItems(news.slice(start, start + 12));
  }, [news, page, start])

  const handlePageClick = ({selected}) => {
    setPage(selected);
    window.scrollTo({
      top: 0, behavior: "smooth"
    });
  }

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
              {currentItems && currentItems.map((item, index) => (
                  <div className="news-item" key={index}>
                    <NavLink to={"/news/" + item["slug"]} state={{item}}>
                      <div className="news-img-wrapper">
                        <img src={item["image_url"]} className="news-img"
                             alt=""/>
                      </div>
                      <div className="news-title-wrapper">
                        <p>{item["title"]}</p>
                      </div>
                      <div className="news-date-wrapper">
                        <i className="fa-regular fa-calendar"></i>
                        <p className="news-date">{formatDate(item["created_at"])}</p>
                        <div className="news-view-wrapper">
                          <i className="fa-regular fa-eye"></i>
                          <p>{item["view_count"]}</p>
                        </div>
                      </div>
                    </NavLink>
                  </div>))}
            </div>
            <div className="news-page-pagination-wrapper">
              <ReactPaginate
                  previousLabel={<i className="fa-solid fa-chevron-left"></i>}
                  nextLabel={<i className="fa-solid fa-chevron-right"></i>}
                  breakLabel="..."
                  pageCount={pageCount}
                  marginPagesDisplayed={1}
                  pageRangeDisplayed={3}
                  onPageChange={handlePageClick}
                  containerClassName="pagination"
                  pageClassName="page-item"
                  pageLinkClassName="page-link"
                  previousClassName="page-item"
                  previousLinkClassName="page-link"
                  nextClassName="page-item"
                  nextLinkClassName="page-link"
                  breakClassName="page-item"
                  breakLinkClassName="page-link"
                  activeClassName="active"
              />
            </div>
          </div>
        </div>
        <Footer/>
        <Marquee/>
      </div>
  )
};

export default NewsPage;
