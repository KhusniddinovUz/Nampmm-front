import React, {useState} from "react";
import "./RahbariyatPage.css";
import {NavLink} from "react-router";
import Navbar from "../../components/Navbar/Navbar.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import PageSideMenu from "../../components/PageSideMenu/PageSideMenu.jsx";
import banner from "../../assets/rahbariyat/banner.jpg";
import bannerBuilding from "../../assets/rahbariyat/banner-building.svg";
import bannerVector from "../../assets/rahbariyat/banner-vector.png";
import leader from "../../assets/rahbariyat/leader.jpg";
import rahbariyatVector from "../../assets/rahbariyat/rahbariyat-vector.png";
import logo from "../../assets/logo.png";
import user from "../../assets/user1.png";

const RahbariyatPage = () => {
  const [rahbarVazifa, setRahbarVazifa] = useState(false);
  const [rahbarFaoliyat, setRahbarFaoliyat] = useState(false);
  const [orinbosar, setOrinbosar] = useState({vazifa: false, faoliyat: false});
  const [akademik, setAkademik] = useState({vazifa: false, faoliyat: false});

  return (<div className="leadership-page-wrapper">
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
            <NavLink to={"/"}>Institut</NavLink>
            <i className="fa-solid fa-caret-right"></i>
          </li>
          <li>Rahbariyat</li>
        </ul>
        <h2>Rahbariyat</h2>
      </div>
    </section>

    <div className="page-inner-container">
      <div className="page-inner">
        <main className="leadership-page">
          <div className="page-content">
            <div className="row">
              <div className="col-12">
                <div className="leader-banner-wrapper">
                  <div className="leader-banner rahbar-banner">
                    <div className="details">
                      <h3 className="name">Aziboyev Shuxrat Olimovich</h3>
                      <p className="role">
                        Namangan viloyati pedagogik mahorat markazi direktori
                      </p>

                      <div className="divider"></div>

                      <div className="contact-row">
                        <a href="tel:+998555080667" className="pill">
                          <i
                              style={{color: "rgba(20, 95, 203, 1)"}}
                              className="fa-solid fa-phone"
                          ></i>
                          +998 69 234 37 11
                        </a>
                        <a href="mailto:murodkhujaevs@gmail.com" className="pill">
                          <i
                              style={{color: "rgba(15, 190, 85, 1)"}}
                              className="fa-solid fa-envelope"
                          ></i>
                          murodkhujaevs@gmail.com
                        </a>
                      </div>

                      <div className="btn-row">
                        <button className="dropdown-btn"
                                onClick={() => {
                                  if (rahbarVazifa) {
                                    setRahbarVazifa(false);
                                  }
                                  setRahbarFaoliyat(!rahbarFaoliyat);
                                }}>
                          Mehnat faoliyati
                          {rahbarFaoliyat ? (<i className="fa-solid fa-caret-up"/>) : (
                              <i className="fa-solid fa-caret-down"/>)}
                        </button>
                        <button className="dropdown-btn"
                                onClick={() => {
                                  if (rahbarFaoliyat) {
                                    setRahbarFaoliyat(false);
                                  }
                                  setRahbarVazifa(!rahbarVazifa);
                                }}>
                          Vazifalari
                          {rahbarVazifa ? (<i className="fa-solid fa-caret-up"/>) : (
                              <i className="fa-solid fa-caret-down"/>)}
                        </button>
                      </div>
                    </div>
                    <div className="photo">
                      <div>
                        <img src={rahbariyatVector} alt=""/>
                        <img src={logo} alt=""/>
                      </div>
                      <img src={leader} alt="Prorector"/>
                    </div>
                  </div>
                  <div className="leader-dropdown-item"
                       style={{display: rahbarVazifa ? "block" : "none"}}>
                    <div className="leader-dropdown-wrapper">
                      <div className="divider"></div>
                      <div className="leader-dropdown-content">
                        <p><strong>Hududiy markaz direktorining lavozim majburiyatlari
                          quyidagilardan iborat:</strong></p>
                        <p><em>- Hududiy markaz faoliyatiga umumiy rahbarlik qilish,
                          O‘zbekiston Respublikasining Konstitutsiyasi, O‘zbekiston
                          Respublikasining “Maktabgacha ta’lim va tarbiya to‘g‘risida”gi,
                          “Ta’lim to‘g‘risida”gi, “Davlat fuqarolik xizmati
                          to‘g‘risida”gi, “Pedagogning maqomi to‘g‘risida”gi va boshqa
                          qonunlar hamda normativ-huquqiy hujjatlar, shuningdek hududiy
                          markaz Nizomi talablariga rioya qilish.</em></p>
                        <p><em>- Hududiy markaz nomidan xo‘jalik shartnomalarini tuzish,
                          xorijiy va mahalliy tashkilotlarda Hududiy markaz manfaatlarini
                          ifoda etish, shuningdek, o‘z faoliyati to‘g‘risida Vazirlikka
                          hisobotlar taqdim etish.</em></p>
                        <p><em>- Qonunchilikka muvofiq o‘z vakolatlari doirasida hududiy
                          markazning moliyaviy mablag‘larini tasarruf etish.</em></p>
                        <p><em>- Hududiy markazga ajratilgan byudjet mablag‘larining
                          smetada belgilangan xarajatlar yo‘nalishlari bo‘yicha shuningdek
                          byudjetdan tashqari mablag‘larni ishlatilishini ta’minlash.</em>
                        </p>
                        <p><em>- G‘aznachilik bo‘linmalarida hududiy markazning
                          hisob-raqamlarini va boshqa bank hisob-raqamlarini ochish.</em>
                        </p>
                        <p><em>- O‘z vakolatlari doirasida buyruqlar chiqarish va
                          ishonchnomalar berish.</em></p>
                        <p><em>- Hududiy markaz xodimlarini belgilangan tartibda lavozimga
                          tayinlash va lavozimdan ozod etish.</em></p>
                        <p><em>- Direktor o‘rinbosarlari va boshqa mansabdor shaxslarning
                          vakolatlarini belgilash, ular o‘rtasida majburiyatlarni
                          taqsimlash, tarkibiy bo‘limlar va kafedralarga rahbarlik qilish
                          borasida shaxsiy javobgarlik darajasini belgilash.</em></p>
                        <p><em>- Direktor o‘rinbosarlari, bo‘lim boshliqlari va kafedra
                          mudirlarining hisobotlarini eshitish.</em></p>
                        <p><em>- Samarali mehnat qilgan xodimlarni rag‘batlantirish, o‘z
                          ishiga mas’uliyatsizlik bilan yondashgan, o‘ziga topshirilgan
                          vazifalarni o‘z vaqtida bajarmagan xodimlarni o‘rnatilgan
                          tartibda intizomiy javobgarlikka tortish masalalarini hal
                          etish.</em></p>
                        <p><em>- Hududiy markaz Kengashi tavsiyalari asosida o‘quv
                          rejalari, dasturlar va ilmiy-metodik ishlar rejalarini
                          tasdiqlash va ma’ruzalar, laboratoriya mashg‘ulotlari,
                          ilmiy-amaliy ishlarning bajarilishi ustidan nazorat qilish.</em>
                        </p>
                        <p><em>- Pedagogik markazning o‘quv-metodik va moddiy-texnik
                          bazasini mustahkamlash hamda tinglovchilarga maishiy xizmat
                          ko‘rsatish bo‘yicha ishlarni tashkil etish.</em></p>
                        <p><em>- Hududiy markaz ichki tartib hamda odob-axloq qoidalarini
                          o‘rnatilgan tartibda tasdiqlash hamda ushbu qoidalar xodimlar va
                          tinglovchilar tomonidan bajarilishini nazorat qilish.</em></p>
                        <p><em>- Jamoada sog‘lom ma’naviy va ijodiy muhitni shakllantirish
                          chora-tadbirlarini ko‘rish.</em></p>
                        <p><em>- Hududiy markazlar faoliyatiga qo‘yilgan
                          sanitariya-gigiyena talablariga, mehnatni muhofaza qilish,
                          texnika va yong‘in xavfsizligi qoidalariga rioya qilinishini
                          ta’minlash.</em></p>
                        <p><em>- Maktabgacha va maktab ta’limi pedagog xodimlarini qayta
                          tayyorlash va malakasini oshirishga qo‘yilgan davlat ta’lim
                          talablari, o‘quv rejalari va dasturlar, boshqa o‘quv-metodik
                          hujjatlarning o‘quv jarayoniga joriy etilishini ta’minlash,
                          ta’lim sifatini nazorat qilish.</em></p>
                        <p><em>- Hududiy markazda olib borilayotgan ilmiy-tadqiqot va
                          ilmiy-metodik ishlarni muvofiqlashtirish.</em></p>
                        <p><em>- Hududiy markaz, hududiy maktabgacha va maktab ta’limi
                          boshqarmasi va hududdagi oliy ta’lim tashkilotlari bilan
                          birgalikda “Ustoz-shogird” tizimi orqali ustuvor bo‘lgan fan
                          sohalari bo‘yicha pedagog xodimlar va oliy ta’lim tashkilotlari
                          professor-o‘qituvchilari o‘rtasida o‘zaro hamkorlik aloqalarini
                          kengaytirish choralarini ko‘rish.</em></p>
                        <p><em>- Bo‘limlar, kafedralar, professor-o‘qituvchilar va
                          xodimlarning vazifalari, mehnat qilish va boshqa huquqlari,
                          funksional vazifalarini tartibga soluvchi me’yoriy hujjatlarni
                          belgilangan tartibda tasdiqlash.</em></p>
                        <p><em>- Hududiy markaz direktoriga qonun hujjatlarida nazarda
                          tutilgan boshqa vazifalar ham yuklatilishi mumkin.</em></p>
                      </div>
                    </div>
                  </div>
                  <div className="leader-dropdown-item"
                       style={{display: rahbarFaoliyat ? "block" : "none"}}>
                    <div className="leader-dropdown-wrapper">
                      <div className="divider"></div>
                      <div className="leader-dropdown-content">
                        <h1> Aziboyev Shuxrat Olimovich </h1>
                        <p>1980-yilda Namangan viloyati chortoq tumanida tug'ilgan.</p>
                        <h3>Mehnat faoliyati</h3>
                        <p>
                          1997-2001&nbsp;yy. - O‘zbekiston Davlat Jahon Tillari
                          universiteti talabasi;<br/>
                          2002-2003&nbsp;yy. - Harbiy xizmat;<br/>
                          2003-2007&nbsp;yy. - Namangan viloyati Chortoq pedagogika
                          kolleji ingliz tili o‘qituvchisi;<br/>
                          2007-2009&nbsp;yy. - “Kamolot” yoshlar ijtimoiy harakati Chortoq
                          tuman bo‘limi yetakchi mutaxassisi;<br/>
                          2009-2010&nbsp;yy. - Namangan davlat universiteti qoshidagi
                          3-son akademik litsey ingliz tili o‘qituvchisi;<br/>
                          2015-2015&nbsp;yy. - Namangan viloyati Chortoq tuman xalq
                          ta’limi bo‘limi xorijiy tillar metodisti;<br/>
                          2015-2019&nbsp;yy. - Namangan davlat universiteti qoshidagi
                          3-son akademik litsey ingliz tili o‘qituvchisi, xorijiy tillar
                          kafedrasi mudiri;<br/>
                          2019-2020&nbsp;yy. - Janubiy Koreya, Gangju shahrida “Samsung”
                          korxonasida ishchi;<br/>
                          2020-2021&nbsp;yy. - Chortoq tumanidagi “MLC” o‘quv markazida
                          o‘qituvchi;<br/>
                          2020-2022&nbsp;yy. - Namangan Davlat Universiteti
                          magistranti;<br/>
                          2021-2022&nbsp;yy. - Namangan Davlat Universiteti
                          o‘qituvchisi;<br/>
                          2022-2024&nbsp;yy. - Namangan shahridagi Prezident maktabi
                          ijrochi direktor;<br/>
                          2024&nbsp;y. h.v. - Namangan viloyati pedagogik mahorat markazi
                          direktori.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="leader-banner-wrapper">
                  <div className="leader-banner">
                    <div className="photo">
                      <img src={user} alt="Prorector"/>
                    </div>
                    <div className="details">
                      <h3 className="name">Abdullaev Abdurasul Raxmonberdievich</h3>
                      <p className="role">
                        Pedagoglarni kasbiy rivojlantirish bo‘yicha direktor o‘rinbosari
                      </p>

                      <div className="divider"></div>

                      <div className="contact-row">
                        <a href="tel:+998555080667" className="pill">
                          <i
                              style={{color: "rgba(20, 95, 203, 1)"}}
                              className="fa-solid fa-phone"
                          ></i>
                          +998 69 234 37 11
                        </a>
                        <a href="mailto:murodkhujaevs@gmail.com" className="pill">
                          <i
                              style={{color: "rgba(15, 190, 85, 1)"}}
                              className="fa-solid fa-envelope"
                          ></i>
                          murodkhujaevs@gmail.com
                        </a>
                      </div>

                      <div className="btn-row">
                        <button className="dropdown-btn" onClick={() => {
                          setOrinbosar({
                            vazifa: false, faoliyat: !orinbosar.faoliyat
                          })
                        }}>
                          Mehnat faoliyati
                          {orinbosar.faoliyat ? (
                              <i className="fa-solid fa-caret-up"/>) : (
                              <i className="fa-solid fa-caret-down"/>)}
                        </button>
                        <button className="dropdown-btn" onClick={() => setOrinbosar({
                          vazifa: !orinbosar.vazifa, faoliyat: false
                        })}>
                          Vazifalari
                          {orinbosar.vazifa ? (<i className="fa-solid fa-caret-up"/>) : (
                              <i className="fa-solid fa-caret-down"/>)}
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="leader-dropdown-item"
                       style={{display: orinbosar.vazifa ? "block" : "none"}}>
                    <div className="leader-dropdown-wrapper">
                      <div className="divider"></div>
                      <div className="leader-dropdown-content">
                        <p><strong>Pedagoglarni kasbiy rivojlantirish bo‘yicha direktor
                          o‘rinbosarining lavozim majburiyatlari quyidagilar:</strong></p>
                        <p><em>- O‘zbekiston Respublikasi Konstitusiyasi va qonunlari,
                          shuningdek boshqa normativ-huquqiy hujjatlarga rioya
                          qilish.</em></p>
                        <p><em>- O‘zbekiston Respublikasi Prezidenti, Vazirlar Mahkamasi
                          qarorlari, Maktabgacha va maktab ta’limi vazirligi buyruqlarida
                          belgilangan vazifalarni bajarishni tashkil etish.</em></p>
                        <p><em>- O‘quv jarayonida davlat talablari, normativ hujjatlar,
                          o‘quv rejalari va dasturlarni joriy etilishini ta’minlash.</em>
                        </p>
                        <p><em>- Faoliyatini hududiy markaz direktori rahbarligida olib
                          boradi.</em></p>
                        <p><em>- Lavozimga tayinlash va lavozimdan ozod etish Vazirlik
                          buyrug‘i asosida qonunchilikka muvofiq amalga oshiriladi.</em>
                        </p>
                        <p><em>- Direktor yo‘qligida uning vakolatlarini vaqtincha
                          bajaradi.</em></p>
                        <p><em>- Metodik xizmat ko‘rsatish, uzluksiz kasbiy ta’lim,
                          raqamli texnologiyalar va axborot resurs markazi bo‘limlari
                          faoliyatini umumiy nazorat qiladi.</em></p>
                        <p><em>- Pedagog kadrlarni qayta tayyorlash va malaka oshirish
                          reja-dasturlarini ishlab chiqilishini nazorat qiladi.</em></p>
                        <p><em>- O‘quv-metodik materiallar tayyorlanishi va amaliyotga
                          joriy etilishi ustidan nazoratni amalga oshiradi.</em></p>
                        <p><em>- Kasbiy rivojlantirish kurslarini rejalashtirish va amalga
                          oshirish ishlarini muvofiqlashtiradi.</em></p>
                        <p><em>- Raqamli texnologiyalar va elektron resurslardan
                          foydalanish imkoniyatlarini kengaytirish ustidan nazoratni olib
                          boradi.</em></p>
                        <p><em>- Kutubxona va elektron fonddan samarali foydalanish
                          imkoniyatlari mavjudligini nazorat qiladi.</em></p>
                        <p><em>- Yangi usullar va innovatsion texnologiyalarni joriy etish
                          tavsiyalarini ishlab chiqadi va ijrosini nazorat qiladi.</em>
                        </p>
                        <p><em>- Kasbiy rivojlantirish samaradorligini oshirish bo‘yicha
                          tahlillar olib boradi va takliflar ishlab chiqadi.</em></p>
                        <p><em>- Seminar, trening, amaliy mashg‘ulotlarni tashkil etadi va
                          o‘tkazadi, kafedra professor-o‘qituvchilar ishtirokini
                          ta’minlaydi.</em></p>
                        <p><em>- Kasbiy rivojlantirish jarayonini davlat talablari va
                          normativ hujjatlarga mos tarzda tashkil etadi va nazorat
                          qiladi.</em></p>
                        <p><em>- Umumiy strategiyaga muvofiq kasbiy rivojlantirish
                          bo‘yicha takliflar tayyorlaydi.</em></p>
                        <p><em>- Yuqori natijalar uchun xodimlarni rag‘batlantirish yoki
                          intizomiy choralar ko‘rish bo‘yicha direktorga takliflar
                          kiritadi.</em></p>
                        <p><em>- Qonunchilikda nazarda tutilgan boshqa vazifalarni ham
                          bajarishi mumkin.</em></p>
                      </div>

                    </div>
                  </div>
                  <div className="leader-dropdown-item"
                       style={{display: orinbosar.faoliyat ? "block" : "none"}}>
                    <div className="leader-dropdown-wrapper">
                      <div className="divider"></div>
                      <div className="leader-dropdown-content">
                        <h1> Abdullaev Abdurasul Raxmonberdievich </h1>
                        <p>1978-yilda Namangan viloyati To'raqo'rg'on tumanida
                          tug'ilgan.</p>
                        <h3>Mehnat faoliyati</h3>
                        <p>
                          2000-2001&nbsp;yy. - “Kosonsoy Tekmen” qo‘shma korxonasi sifat
                          nazoratchisi;<br/>
                          2001-2005&nbsp;yy. - Namangan davlat universiteti talabasi;<br/>
                          2006-2007&nbsp;yy. - Namangan tuman Irvadon iqtisodiyot kolleji
                          o‘qituvchisi;<br/>
                          2007-2008&nbsp;yy. - Namangan tuman Irvadon iqtisodiyot kolleji
                          o‘quv ishlari bo‘yicha direktor o‘rinbosari;<br/>
                          2008-2016&nbsp;yy. - To‘raqo‘rg‘on ijtimoiy-iqtisodiyot va
                          servis kasb-hunar kolleji o‘quv ishlari bo‘yicha direktor
                          o‘rinbosari;<br/>
                          2016-2016&nbsp;yy. - Namangan muhandislik-pedagogika instituti
                          qoshidagi To‘raqo‘rg‘on akademik litseyi o‘quv ishlari bo‘yicha
                          direktor o‘rinbosari;<br/>
                          2016-2018&nbsp;yy. - Namangan muhandislik-pedagogika instituti
                          qoshidagi To‘raqo‘rg‘on akademik litseyi direktori;<br/>
                          2018y–2018&nbsp;yy. - To‘raqo‘rg‘on tuman xalq ta’limi bo‘limi
                          mudiri o‘rinbosari;<br/>
                          2018y–2022&nbsp;yy. - Namangan viloyati xalq ta’limi
                          boshqarmasiga qarashli 4-sonli davlat ixtisoslashtirilgan
                          maktab-internati direktori;<br/>
                          2022-2023&nbsp;yy. - Prezident ta’lim muassasalari agentligi
                          Namangan viloyati hududiy bo‘lim uslubchisi;<br/>
                          2023-2024&nbsp;yy. - Namangan viloyati maktabgacha va maktab
                          ta’limi boshqarmasi ixtisoslashtirilgan ta’lim muassasalarini
                          muvofiqlashtirish sho‘basi boshlig‘i;<br/>
                          2024-2024&nbsp;yy. - To‘raqo‘rg‘on tuman maktabgacha va maktab
                          ta’limi bo‘limi boshlig‘i v.b;<br/>
                          2024-2024&nbsp;yy. - Namangan viloyati maktabgacha va maktab
                          ta’limi boshqarmasi ixtisoslashtirilgan ta’lim muassasalarini
                          muvofiqlashtirish sho‘basi boshlig‘i;<br/>
                          2024-x/v - Namangan viloyati pedagogik mahorat markazi
                          pedagoglarni kasbiy rivojlantirish bo‘yicha direktor
                          o‘rinbosari.
                        </p>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="leader-banner-wrapper">
                  <div className="leader-banner">
                    <div className="photo">
                      <img src={user} alt="Prorector"/>
                    </div>
                    <div className="details">
                      <h3 className="name">Tuxtasinov Muxammad G‘ulomjon-o‘g‘li</h3>
                      <p className="role">
                        Akademik faoliyat bo‘yicha direktor o‘rinbosari
                      </p>

                      <div className="divider"></div>

                      <div className="contact-row">
                        <a href="tel:+998555080667" className="pill">
                          <i
                              style={{color: "rgba(20, 95, 203, 1)"}}
                              className="fa-solid fa-phone"
                          ></i>
                          +998 69 234 37 11
                        </a>
                        <a href="mailto:murodkhujaevs@gmail.com" className="pill">
                          <i
                              style={{color: "rgba(15, 190, 85, 1)"}}
                              className="fa-solid fa-envelope"
                          ></i>
                          murodkhujaevs@gmail.com
                        </a>
                      </div>

                      <div className="btn-row">
                        <button className="dropdown-btn" onClick={() => {
                          setAkademik({
                            vazifa: false, faoliyat: !akademik.faoliyat
                          })
                        }}>
                          Mehnat faoliyati
                          {akademik.faoliyat ? (
                              <i className="fa-solid fa-caret-up"/>) : (
                              <i className="fa-solid fa-caret-down"/>)}
                        </button>
                        <button className="dropdown-btn" onClick={() => setAkademik({
                          vazifa: !akademik.vazifa, faoliyat: false
                        })}>
                          Vazifalari
                          {akademik.vazifa ? (<i className="fa-solid fa-caret-up"/>) : (
                              <i className="fa-solid fa-caret-down"/>)}
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="leader-dropdown-item"
                       style={{display: akademik.vazifa ? "block" : "none"}}>
                    <div className="leader-dropdown-wrapper">
                      <div className="divider"></div>
                      <div className="leader-dropdown-content">
                        <p><strong>Akademik faoliyat bo‘yicha direktor o‘rinbosarining
                          lavozim majburiyatlari quyidagilardan iborat:</strong></p>
                        <p><em>- O‘zbekiston Respublikasi Konstitusiyasi va qonunlari
                          talablariga, shuningdek, boshqa normativ-huquqiy hujjatlarga
                          rioya qilish;</em></p>
                        <p><em>- O‘zbekiston Respublikasi Prezidenti, Vazirlar
                          Mahkamasining qarorlari va qonunchilik hujjatlari, Maktabgacha
                          va maktab ta’limi vazirligi buyruqlaridagi vazifalarni
                          bajarilishini tashkil etish;</em></p>
                        <p><em>- O‘quv jarayonida davlat talablari, normativ hujjatlar va
                          o‘quv rejalari va dasturlariga muvofiq joriy etilishini
                          ta’minlash;</em></p>
                        <p><em>- Akademik faoliyat bo‘yicha direktor o‘rinbosari hududiy
                          markaz direktori rahbarligida faoliyat yuritadi;</em></p>
                        <p><em>- Lavozimga tayinlash va lavozimdan ozod etish Maktabgacha
                          va maktab ta’limi vazirining buyrug‘i bilan qonunchilikka
                          muvofiq amalga oshiriladi;</em></p>
                        <p><em>- Direktor ishda bo‘lmagan davrda uning vakolatlarini
                          vaqtincha bajaradi;</em></p>
                        <p><em>- Akademik faoliyatni muvofiqlashtirish bo‘limi, fanlarni
                          rivojlantirish bo‘limi, maktabgacha ta'limni muvofiqlashtirish
                          bo‘limi, ta’lim xizmatlarini tashkil etish bo‘limi va kafedralar
                          faoliyatini nazorat qiladi;</em></p>
                        <p><em>- O‘quv jarayonining sifatini oshirish va samaradorligini
                          ta’minlash uchun ishchi o‘quv rejalari va dasturlarini ishlab
                          chiqishni nazorat qiladi;</em></p>
                        <p><em>- Ta’lim sifatini oshirish maqsadida malakali pedagog
                          kadrlarni jalb qiladi;</em></p>
                        <p><em>- Fanlarni rivojlantirish bo‘limi faoliyatida ilg‘or
                          texnologiyalar va jahon tajribasidan foydalanishni
                          muvofiqlashtiradi;</em></p>
                        <p><em>- Maktabgacha ta’limni muvofiqlashtirish bo‘limi orqali
                          hududiy maktabgacha ta’lim sifatini oshirish va innovatsion
                          yondashuvlarni joriy etish ishlarini tashkil etadi;</em></p>
                        <p><em>- Ta’lim xizmatlarini tashkil etish bo‘limi faoliyatida
                          strategik dasturlar ishlab chiqadi va amalga oshiradi;</em></p>
                        <p><em>- Kafedralarda professor-o‘qituvchilarning ilmiy, o‘quv va
                          metodik ishlarini rejalashtiradi va amalga oshiradi;</em></p>
                        <p><em>- Seminar-treninglar, ilmiy-amaliy anjumanlar va
                          tadbirlarni tashkil qiladi va ularni nazorat qiladi;</em></p>
                        <p><em>- Umumiy o‘rta ta’limdagi muammolarni aniqlab, yechimiga
                          qaratilgan ilmiy-tadqiqot ishlarini amalga oshiradi;</em></p>
                        <p><em>- Bo‘lim va kafedralar faoliyatini doimiy monitoring
                          qiladi;</em></p>
                        <p><em>- Monitoring natijalari asosida mukofot yoki intizomiy
                          choralar bo‘yicha takliflar kiritadi;</em></p>
                        <p><em>- Akademik bo‘linmalarni boshqarish, faoliyatini
                          rejalashtirish va muvofiqlashtirish bo‘yicha qaror qabul
                          qiladi;</em></p>
                        <p><em>- Qonun hujjatlarida belgilangan boshqa vazifalarni ham
                          bajaradi.</em></p>
                      </div>
                    </div>
                  </div>
                  <div className="leader-dropdown-item"
                       style={{display: akademik.faoliyat ? "block" : "none"}}>
                    <div className="leader-dropdown-wrapper">
                      <div className="divider"></div>
                      <div className="leader-dropdown-content">
                        <h1> Tuxtasinov Muxammad G‘ulomjon-o‘g‘li </h1>
                        <p>1987-yilda Namangan viloyati Yangiqo‘rg‘on tumanida
                          tug'ilgan.</p>
                        <h3>Mehnat faoliyati</h3>
                        <p>
                          2005-2009&nbsp;yy. - Namangan davlat universiteti Tarix
                          fakulteti talabasi;<br/>
                          2009-2011&nbsp;yy. - Namangan davlat universiteti Vatan tarixi
                          yo‘nalishi magistranti;<br/>
                          2007-2009&nbsp;yy. - Namangan shahridagi 62-sonli umumiy o‘rta
                          ta’lim maktabi o‘rindosh tarix fani o‘qituvchisi;<br/>
                          2009-2012&nbsp;yy. - Namangan shahridagi 2-sonli davlat
                          ixtisoslashgan maktab internati tarix fani o‘qituvchisi;<br/>
                          2012-2014&nbsp;yy. - Namangan viloyati pedagogik kadrlarni qayta
                          tayyorlash va malakasini oshirish instituti Ijtimoiy fanlar va
                          ma’naviyat asoslari kafedrasi o‘qituvchisi;<br/>
                          2014-2017&nbsp;yy. - Namangan viloyati xalq ta’limi xodimlarini
                          qayta tayyorlash va ularning malakasini oshirish instituti
                          Ijtimoiy-iqtisodiy fanlar kafedrasi o‘qituvchisi;<br/>
                          2017-2018&nbsp;yy. - Namangan viloyati xalq ta’limi xodimlarini
                          qayta tayyorlash va ularning malakasini oshirish instituti
                          Ijtimoiy-iqtisodiy fanlar kafedrasi mudiri v.b.;<br/>
                          2018-2018&nbsp;yy. - Namangan davlat universiteti huzuridagi
                          xalq ta’limi xodimlarini qayta tayyorlash va ularning malakasini
                          oshirish hududiy markazi Ijtimoiy-iqtisodiy fanlar metodikasi
                          kafedrasi o‘qituvchisi;<br/>
                          2018-2021&nbsp;yy. - Namangan viloyati xalq ta’limi xodimlarini
                          qayta tayyorlash va ularning malakasini oshirish hududiy markazi
                          Ijtimoiy-iqtisodiy fanlar metodikasi kafedrasi mudiri;<br/>
                          2021-2022&nbsp;yy. - Namangan viloyati xalq ta’limi xodimlarini
                          qayta tayyorlash va ularning malakasini oshirish hududiy markazi
                          Ijtimoiy-iqtisodiy fanlar va tillarni o‘qitish metodikasi
                          kafedrasi mudiri;<br/>
                          2022-2024&nbsp;yy. - Namangan viloyati pedagoglarni yangi
                          metodikalarga o‘rgatish milliy markazi Ijtimoiy-iqtisodiy fanlar
                          va tillarni o‘qitish metodikasi kafedrasi mudiri;<br/>
                          2024-y. 19-avgust - 2024-y. 17-sentyabr - Namangan viloyati
                          pedagogik mahorat markazi direktori vazifasini vaqtincha
                          bajaruvchi;<br/>
                          2024-y. 17-sentyabr - 2024-y. 19-oktyabr - Namangan viloyati
                          pedagogik mahorat markazi Ijtimoiy-iqtisodiy fanlar va tillarni
                          o‘qitish metodikasi kafedrasi mudiri;<br/>
                          2024-y. 21-oktyabrdan - Namangan viloyati pedagogik mahorat
                          markazi Akademik faoliyat bo‘yicha direktor o‘rinbosari.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

        <PageSideMenu title="Institut"/>
      </div>
    </div>

    <Footer/>
  </div>);
};

export default RahbariyatPage;
