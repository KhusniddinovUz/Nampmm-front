import React from "react";
import Navbar from "../../../components/Navbar/Navbar";
import Footer from "../../../components/Footer/Footer";
import Marquee from "../../../components/Marquee/Marquee";
import PageSideMenu from "../../../components/PageSideMenu/PageSideMenu";
import TeacherComponent from "../../../components/TeacherComponent/TeacherComponent.jsx";
import banner from "../../../assets/rahbariyat/banner.jpg";
import bannerVector from "../../../assets/rahbariyat/banner-vector.png";
import bannerBuilding from "../../../assets/rahbariyat/banner-building.svg";
import {NavLink} from "react-router";
import {markazLinks} from "../../../constants.js";
import "./AniqFanlarKafedraPage.css";
import user from "../../../assets/user1.png";
import mahfuza from "../../../assets/teachers/mahfuza.JPG";
import sadriddin from "../../../assets/teachers/sadriddin.JPG";
import farux from "../../../assets/teachers/farux.JPG";

const AniqFanlarKafedraPage = () => {
  return (
      <div id="aniq-fanlar-kafedra-page">
        <Navbar style={{color: "#002d6d"}}/>
        <div className="aniq-fanlar-kafedra-page-content-wrapper">
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
                <li>Kafedralar</li>
              </ul>
              <h2>Aniq va tabiiy fanlar metodikasi kafedrasi</h2>
            </div>
          </section>
          <section className="aniq-fanlar-kafedra-page-content">
            <div className="aniq-fanlar-kafedra-page-content-left">
              <div className="aniq-fanlar-teachers-list-wrapper row">
                <TeacherComponent title="Kafedra mudiri, PhD, Dotsent"
                                  name="Alinazarova Maxfuza Alisherovna" image={mahfuza}/>
                <TeacherComponent title="Katta o'qituvchi"
                                  name="Jumabayev Abdulxamid To'xtanazarovich"
                                  image={user}/>
                <TeacherComponent title="Katta o'qituvchi"
                                  name="Xolmirzayeva Zoxidaxon Yo'ldashevna"
                                  image={user}/>
                <TeacherComponent title="Katta o'qituvchi"
                                  name="Umarova Matlyuba Yusuvjonovna" image={user}/>
                <TeacherComponent title="Katta o'qituvchi"
                                  name="Nabiyev Farux Abduraximovich" image={farux}/>
                <TeacherComponent title="Katta o'qituvchi (PhD)"
                                  name="Siddiqov Sadriddin Shuxratjon o'g'li"
                                  image={sadriddin}/>
              </div>
            </div>
            <PageSideMenu title="Markaz" active="Kafedralar" links={markazLinks}/>
          </section>
        </div>
        <Footer/>
        <Marquee/>
      </div>)
};

export default AniqFanlarKafedraPage;
