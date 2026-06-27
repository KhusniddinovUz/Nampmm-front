import React from 'react';
import banner from "../../assets/rahbariyat/banner.jpg";
import bannerVector from "../../assets/rahbariyat/banner-vector.png";
import bannerBuilding from "../../assets/rahbariyat/banner-building.svg";
import {NavLink} from "react-router";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer.jsx";
import Marquee from "../../components/Marquee/Marquee.jsx";
import "./ELibraryPage.css";

const books = [
  {
    file: "Конфренция.pdf",
    title: "Namangan viloyati pedagogik mahorat markazining 2026-yil 1-iyundagi xalqaro ilmiy anjumani to‘plami",
    size: "5.5 MB",
  },
  {
    file: "Namangan viloyati PMM konferensiya to‘plami.pdf",
    title: "ATFMK, UKTTEB va RTRB anjumani to‘plami 2026-yil",
    size: "9.9 MB",
  },
  {
    file: "Namangan_viloyati_PMM_2026_yil_28_mart_konferensiya_to'plami_.pdf",
    title: "MBMTMK va MTMB anjumani to‘plami 2026-yil",
    size: "3.3 MB",
  },
  {
    file: "Markaz 2025-oktabr xalqaro anjuman to'plami.pdf",
    title: "Namangan viloyati pedagogik mahorat markazining 2025-yil 30-oktabrdagi xalqaro ilmiy anjumani to‘plami",
    size: "10.0 MB",
  },
  {
    file: "konferensiya maqolalari6.pdf",
    title: "Ijtimoiy-iqtisodiy fanlar va tillarni o‘qitish metodikasi kafedrasi anjumani to‘plami 2025-yil",
    size: "10.7 MB",
  },
  {
    file: "Anjuman to'plami. Namangan-2025.pdf",
    title: "Namangan viloyati pedagogik mahorat markazining 2025-yil maydagi respublika ilmiy anjumani to‘plami",
    size: "5.1 MB",
  },
  {
    file: "Markaz anjuman to'plami 2024-yil 1.pdf",
    title: "Namangan viloyati pedagogik mahorat markazining 2024-yil anjumani to‘plami",
    size: "",
  },
];

const ELibraryPage = () => {
  return (
      <div id="e-library" className="leadership-page-wrapper">
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
                <NavLink to={"/"}>Ilmiy-metodik faoliyat</NavLink>
                <i className="fa-solid fa-caret-right"></i>
              </li>
              <li>Ilmiy-amaliy anjumanlar</li>
            </ul>
            <h2>Ilmiy-amaliy anjumanlar</h2>
          </div>
        </section>

        <div className='page-inner-container'>
          <div className="e-library-content-wrapper">
            <h2>Ilmiy anjuman va konferensiya to‘plamlari</h2>
            <ul className="e-library-list">
              {books.map((book) => (
                  <li key={book.file} className="e-library-item">
                    <a
                        href={"/" + encodeURIComponent(book.file)}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                      <span className="e-library-item-icon">
                        <i className="fa-solid fa-file-pdf"></i>
                      </span>
                      <span className="e-library-item-info">
                        <span className="e-library-item-title">{book.title}</span>
                        {book.size && (
                            <span className="e-library-item-size">{book.size}</span>
                        )}
                      </span>
                      <span className="e-library-item-download">
                        <i className="fa-solid fa-download"></i>
                      </span>
                    </a>
                  </li>
              ))}
            </ul>
          </div>
        </div>

        <Footer/>
        <Marquee/>
      </div>
  );
};

export default ELibraryPage;
