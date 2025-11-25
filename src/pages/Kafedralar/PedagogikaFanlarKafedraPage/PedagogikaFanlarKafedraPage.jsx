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
import user from "../../../assets/user1.png";
import samiya from "../../../assets/teachers/samiya.JPG";
import ismoil from "../../../assets/teachers/ismoil.JPG";
import TeacherComponent from "../../../components/TeacherComponent/TeacherComponent.jsx";


const PedagogikaFanlarKafedraPage = () => {
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
              <h2>Pedagogika, psixologiya va amaliy fanlar metodikas kafedrasi</h2>
            </div>
          </section>

          <section className="main-page-content">
            <div className="main-page-content-left">
              <div className="row">
                <TeacherComponent title="Kafedra mudiri PhD"
                                  name="Ne'matova Samiyaxon Ilxomjonovna"
                                  image={samiya}/>
                <TeacherComponent title="Katta o'qituvchi"
                                  name="Orifova Saboatxon Yakubovna"
                                  image={user}/>
                <TeacherComponent title="Katta o'qituvchi"
                                  name="Insapov Ismoil Tuychialiyevich" image={ismoil}/>
                <TeacherComponent title="Dotsent"
                                  name="Djo'rayev Qambarali Baxramovich"
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

export default PedagogikaFanlarKafedraPage;
