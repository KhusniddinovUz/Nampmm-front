import React from 'react';
import './AboutPage.css';
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Marquee from "../../components/Marquee/Marquee";
import PageSideMenu from "../../components/PageSideMenu/PageSideMenu";
import banner from "../../assets/rahbariyat/banner.jpg";
import bannerVector from "../../assets/rahbariyat/banner-vector.png";
import bannerBuilding from "../../assets/rahbariyat/banner-building.svg";
import {NavLink} from "react-router";

const AboutPage = () => {
  return (
      <div id="about-page">
        <Navbar style={{color: "#002d6d"}}/>

        <div className="about-page-content-wrapper">
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
                  <NavLink to={"/"}>Institut</NavLink>
                  <i className="fa-solid fa-caret-right"></i>
                </li>
                <li>Institut haqida</li>
              </ul>
              <h2>Institut haqida</h2>
            </div>
          </section>


          <section className="about-page-content">
            <div className="about-page-content-left">
              <h3>Institut haqida</h3>
              <div className="about-info-list">
                <div className="about-info-item-wrapper">
                  <div className="yellow-circle"></div>
                  <h5>2025-yil</h5>
                  <p>O‘zbekiston Respublikasi Prezidentining 2024-yil 21-iyundagi
                    231-sonli qarori asosida Avloniy nomidagi pedagoglarni kasbiy
                    rivojlantirish va yangi metodikalarga o‘rgatish milliy-tadqiqot
                    instituti negizida A. Avloniy nomidagi pedagogik mahorat milliy
                    instituti tashkil etildi.</p>
                </div>
                <div className="about-info-item-wrapper">
                  <div className="yellow-circle"></div>
                  <h5>2022-yil</h5>
                  <p>O‘zbekiston Respublikasi Prezidentining 2022-yil 11-maydagi 134-sonli
                    farmoni bilan A.Avloniy nomidagi xalq ta’limi muammolarini o‘rganish
                    va istiqbollarini belgilash ilmiy-tadqiqot instituti negizida A.
                    Avloniy nomidagi pedagoglarni kasbiy rivojlantirish va yangi
                    metodikalarga o‘rgatish milliy-tadqiqot instituti tashkil etildi.</p>
                </div>
                <div className="about-info-item-wrapper">
                  <div className="yellow-circle"></div>
                  <h5>2021-yil</h5>
                  <p>
                    O‘zbekiston Respublikasi Prezidentining 2021-yil 25-yanvardagi “Xalq
                    taʼlimi sohasidagi ilmiy-tadqiqot faoliyatini qo‘llab-quvvatlash hamda
                    uzlyuksiz kasbiy rivojlantirish tizimini joriy qilish chora-tadbirlari
                    to‘g‘risida”gi PQ-4963-son qarori bilan quyidagilar institutning
                    asosiy vazifalari etib belgilangan: – xalq taʼlimi tizimini
                    ilmiy-metodik jihatdan taʼminlash, fundamental, amaliy va innovatsion
                    tadqiqotlar o‘tkazish, tadqiqot natijalarini amaliyotga keng joriy
                    etish; – umumiy o‘rta taʼlimning dolzarb muammolari yuzasidan tizimli
                    asosda ilmiy-tadqiqot dasturlari va loyihalarini amalga oshirish,
                    ilmiy, ilmiy-amaliy konferensiyalar, seminarlar, yig‘ilishlar tashkil
                    etish; – doktorantura yo‘nalishlari va magistratura mutaxassisliklari
                    bo‘yicha yuqori malakali kadrlarni tayyorlash, ilmiy xodimlarning
                    kasbiy darajasini doimiy oshirib borish, xalq taʼlimi xodimlarini
                    qayta tayyorlash, rahbar kadrlar va metodistlarning malakasini
                    oshirish; – umumiy o‘rta taʼlim sohasidagi ilg‘or tajribalarni
                    o‘rganish va mamlakatimizda joriy etish bo‘yicha tavsiyalar ishlab
                    chiqish, xorijiy mamlakatlarning yetakchi ilmiy-tadqiqot muassasalari
                    bilan xalqaro aloqalarni rivojlantirish; – umumiy o‘rta taʼlimni
                    tashkil etishning yangi texnologiyalari, vositalari va shakllarini
                    ishlab chiqish, sinovdan o‘tkazish va ekspertiza qilishda ishtirok
                    etish; – kelajak maktabi, uning rahbari va o‘qituvchisining modelini
                    yaratish asosida xalq taʼlimi xodimlarining kasbiy standartlarini
                    ishlab chiqish va doimiy tarzda rivojlantirib borish, ilmiy-tadqiqot
                    faoliyatining taʼlim jarayoni bilan aloqalarini mustahkamlash; – xalq
                    taʼlimi xodimlarining malakasini oshirish faoliyati bilan
                    shug‘ullanayotgan nodavlat taʼlim tashkilotlari uchun namunaviy o‘quv
                    reja, dastur, o‘quv-metodik va boshqa hujjatlarni ishlab chiqish,
                    shuningdek, kurslarning o‘quv-uslubiy taʼminotini doimiy yangilab
                    borishga ko‘maklashish; – "Uzlyuksiz kasbiy taʼlim" maxsus elektron
                    platformasi faoliyatini yuritish, malaka oshirish tashkilotlari bilan
                    birgalikda qayta tayyorlash hamda malaka oshirish kurslari o‘quv
                    modullari kontentini markazlashtirilgan tarzda ishlab chiqish va
                    platformaga kiritilishini taʼminlash.
                  </p>
                </div>
                <div className="about-info-item-wrapper">
                  <div className="yellow-circle"></div>
                  <h5>1945-yil</h5>
                  <p>1945-yil 7-dekabrdan 1964-yil 21-sentyabrgacha K.Ushinskiy nomidagi
                    Respublika o‘qituvchilar malakasini oshirish instituti nomi bilan
                    faoliyatini davom etdirgan.
                  </p>
                </div>


              </div>
            </div>
            <PageSideMenu title={"Institut haqida"} active="Institut haqida"/>
          </section>
        </div>

        <Footer/>
        <Marquee/>
      </div>
  )
};

export default AboutPage;
