import React from "react";
import banner from "../../../assets/rahbariyat/banner.jpg";
import bannerVector from "../../../assets/rahbariyat/banner-vector.png";
import bannerBuilding from "../../../assets/rahbariyat/banner-building.svg";
import {NavLink} from "react-router";
import "../../TuzilmaPage/TuzilmaPage.css";
import Navbar from "../../../components/Navbar/Navbar";
import Footer from "../../../components/Footer/Footer";
import Marquee from "../../../components/Marquee/Marquee";
import PageSideMenu from "../../../components/PageSideMenu/PageSideMenu";
import {markazLinks} from "../../../constants.js";
import TeacherComponent from "../../../components/TeacherComponent/TeacherComponent.jsx";
import user from "../../../assets/user1.png";
import halimjon from "../../../assets/teachers/halimjon.jpg";
import abdumalik from "../../../assets/teachers/abdumalik.jpg";


const IqtisodiyFanlarKafedraPage = () => {
  return (
      <div className="main-page">
        <Navbar style={{color: "#002d6d"}}/>

        <div className="main-page-content-wrapper">
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
                  <NavLink to={"/"}>Markaz</NavLink>
                  <i className="fa-solid fa-caret-right"></i>
                </li>
                <li>Kafedra</li>
              </ul>
              <h2>Ijtimoiy-iqtisodiy fanlar va tillarni o'qitish metodikasi kafedrasi</h2>
            </div>
          </section>

          <section className="main-page-content">
            <div className="main-page-content-left">
              <div className="row">
                <TeacherComponent title="Kafedra mudiri dotsent"
                                  name="Eraliyev Xalimjon Alimbekovich" image={halimjon}/>
                <TeacherComponent title="Katta o'qituvchi"
                                  name="Ergasheva Gulnora Nematovna" image={user}/>
                <TeacherComponent title="Katta o'qituvchi"
                                  name="Qoriyev Abdumalik Ubaydullayevich"
                                  image={abdumalik}/>
                <TeacherComponent title="Katta o'qituvchi"
                                  name="Nuriddinova Nozima Avazxonovna" image={user}/>
                <TeacherComponent title="Katta o'qituvchi"
                                  name="Abdullajanova Nigoraxon Turdialiyevna"
                                  image={user}/>
              </div>
            </div>
            <PageSideMenu title={"Markaz"} active="Kafedra" links={markazLinks}/>
          </section>
        </div>

        <Footer/>
        <Marquee/>
      </div>)
};

export default IqtisodiyFanlarKafedraPage;
