import React, {useState} from "react";
import "./RahbariyatPage.css";
import {NavLink} from "react-router";
import Navbar from "../../components/Navbar/Navbar.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import PageSideMenu from "../../components/PageSideMenu/PageSideMenu.jsx";
import banner from "../../assets/rahbariyat/banner.jpg";
import bannerBuilding from "../../assets/rahbariyat/banner-building.svg";
import bannerVector from "../../assets/rahbariyat/banner-vector.png";
import person from "../../assets/rahbariyat/person.jpg";
import leader from "../../assets/rahbariyat/leader.jpg";
import rahbariyatVector from "../../assets/rahbariyat/rahbariyat-vector.png";
import logo from "../../assets/logo.png";

const RahbariyatPage = () => {
  const [rahbarVazifa, setRahbarVazifa] = useState(false);
  const [rahbarFaoliyat, setRahbarFaoliyat] = useState(false);

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
                          +998 55 508 06‑67 (1003)
                        </a>
                        <a href="mailto:info@avloniy.uz" className="pill">
                          <i
                              style={{color: "rgba(15, 190, 85, 1)"}}
                              className="fa-solid fa-envelope"
                          ></i>
                          info@avloniy.uz
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
                          {rahbarFaoliyat ? (
                              <i className="fa-solid fa-caret-up"/>) : (
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
                        <p><strong>Namangan viloyati pedagogik mahorat markazi
                          direktorining lavozim majburiyati quyidagilar:&nbsp;</strong>
                        </p>
                        <p><em>- O‘zbekiston Respublikasi Konstitutsiyasi va qonunlari,
                          boshqa normativ-huquqiy hujjatlar, shuningdek, institut ustavi
                          talablariga rioya qiladi;</em></p>
                        <p><em>- Institut hamda Qoraqalpog‘iston Respublikasi va
                          viloyatlar pedagogik mahorat markazlari (keyingi o‘rinlarda -
                          Hududiy markazlar)ning o‘quv, ilmiy, metodik faoliyatiga
                          rahbarlik qilish ishlarni tashkil etadi;</em></p>
                        <p><em>- Institut xodimlarini belgilangan tartibda lavozimga
                          tayinlaydi va lavozimidan ozod etadi;</em></p>
                        <p><em>- prorektorlar va institut xodimlarining vakolatlarini
                          belgilaydi;</em></p>
                        <p><em>- Institut tarkibiy bo‘limlari, markazlar va
                          kafedralariga rahbarlik qilish borasida prorektorlar va boshqa
                          mansabdor shaxslarning shaxsiy javobgarlik darajasini
                          belgilaydi;</em></p>
                        <p><em>- prorektorlar, tarkibiy bo‘limlar, markazlar rahbarlari
                          va kafedralar mudirlari hamda Hududiy markazlari
                          rahbarlarining hisobotlarini eshitadi;</em></p>
                        <p><em>- yuridik va jismoniy shaxslar, shu jumladan xorijiy
                          shaxslar va tashkilotlar bilan shartnoma va bitimlar
                          tuzadi;</em></p>
                        <p><em>- Institut kengashi tavsiyalari asosida institut va
                          Hududiy markazlarning o‘quv-mavzu rejalar, dasturlar va
                          ilmiy-metodik ishlar rejasini tasdiqlaydi;</em></p>
                        <p><em>- belgilangan tartibda institut mulki va mablag‘larini
                          tasarruf etadi, o‘z vakolatlari doirasida buyruqlar chiqaradi
                          va ishonchnomalar beradi;</em></p>
                        <p><em>- Institut xodimlarini rag‘batlantirish va intizomiy
                          javobgarlikka tortish masalalari to‘g‘risida qarorlar qabul
                          qiladi;</em></p>
                        <p><em>- Institutda olib borilayotgan ilmiy tadqiqotlar va
                          ilmiy-metodik ishlarni muvofiqlashtiradi;</em></p>
                        <p><em>- qayta tayyorlash va malaka oshirishga qo‘yiladigan
                          davlat talablari, o‘quv rejalari, o‘quv dasturlari va boshqa
                          o‘quv-metodik hujjatlarning o‘quv jarayoniga tatbiq etilishini
                          ta’minlaydi;</em></p>
                        <p><em>- Institutda maishiy xizmatlar ko‘rsatishni tashkil
                          etish, institut o‘quv-metodik va moddiy-texnik bazasini
                          mustahkamlash va rivojlantirish ishlarini amalga
                          oshiradi;</em></p>
                        <p><em>- Institutning ichki tartib-qoidalarini tasdiqlaydi;</em>
                        </p>
                        <p><em>- Institut faoliyatini takomillashtirish bo‘yicha
                          kompleks dasturlar va tadbirlar, konsepsiyalar ijrosini
                          tanqidiy va chuqur tahlil qiladi;</em></p>
                        <p><em>- Institutning ilmiy va ishlab chiqarish faoliyatining
                          yo‘nalishlarini belgilaydi, o‘rnatilgan tartibda uning yillik
                          va istiqboldagi ish rejalarini tasdiqlaydi;</em></p>
                        <p><em>- Institutning bosh moliyaviy boshqaruvchisi sifatida
                          mablag‘lar tushumi va uni maqsadli sarflanishi uchun javob
                          beradi va mablag‘lar sarfini maksimal darajada iqtisod qilish,
                          ulardan samarali va maqsadli foydalanish, davlat budjeti, bank
                          muassasalari, ta’minotchilar, pudratchilar va boshqa
                          tashkilotlar bilan o‘z vaqtida hisob-kitob qilish uchun
                          institutning moliyaviy manbalari ustidan nazorat
                          o‘rnatadi;</em></p>
                        <p><em>- xodimlar mehnati uchun yetarli shart-sharoit yaratish,
                          mehnat qonunchiligi, mehnatni muhofaza qilish, texnika
                          xavfsizligi, ishlab chiqarish sanitariyasi va yong‘inga qarshi
                          himoya qoida va me’yorlari hamda mehnat intizomiga rioya
                          qilinishini ta’minlaydi;</em></p>
                        <p><em>- moddiy, moliyaviy va mehnat resurslaridan samarali
                          foydalanish yuzasidan chora-tadbirlar belgilaydi;</em></p>
                        <p><em>- Institut tuzilmasi va xodimlar mehnatini tashkil
                          etishni takomillashtirish ishlariga rahbarlik qiladi;</em></p>
                        <p><em>- Tasdiqlangan rejalar va loyiha-smeta hujjatlariga
                          muvofiq qurilish, qayta tiklash, shuningdek, asosiy fondlarni
                          to‘liq ta’mirlash ishlariga boshchilik qilish, qurilgan
                          obyektlar va olingan asbob-uskunalarni o‘z vaqtida ishga
                          tushirishni ta’minlaydi;</em></p>
                        <p><em>- xodimlarni o‘rnatilgan tartibda attestatsiyadan
                          o‘tkazish, yangi muddatga lavozimlarga saylash va bo‘shab
                          qolgan o‘rinlarga tanlov asosida nomzodlarni tayinlaydi;</em>
                        </p>
                        <p><em>- doimiy ravishda xodimlar malakasini oshirish,
                          stajor-tadqiqotchi-izlanuvchi va katta ilmiy xodim-izlanuvchi
                          instituti orqali tegishli ixtisosliklar bo‘yicha kadrlar
                          tayyorlashni ta’minlaydi;</em></p>
                        <p><em>- xodimlarni moddiy va ma’naviy rag‘batlantirish,
                          ularning mehnat, yashash va madaniy-maishiy sharoitlarini
                          yaxshilash yuzasidan chora-tadbirlar ko‘radi;</em></p>
                        <p><em>- Institut kengashning raisi bo‘lib, uning faoliyatini
                          boshqaradi;</em></p>
                        <p><em>- Institut va Hududiy markazlari faoliyati ustidan umumiy
                          rahbarlik qiladi, xalqaro hamkorlik ishlarini tashkil
                          qiladi;</em></p>
                        <p><em>- jamoa shartnomasining rahbariyatga tegishli
                          bandlarining bajarilishini ta’minlaydi;</em></p>
                        <p><em>- o‘z xizmat vazifalarini bajarayotganda korrupsiyaviy
                          xatti-harakatlarda qatnashmaslik, shu jumladan, g‘ayriqonuniy
                          imtiyozlarni olish yoki boshqacha tarzda g‘ayriqonuniy
                          maqsadlarda o‘zining yoki boshqa shaxslarning harakatlari yoki
                          qarorlariga ta’sir qilish uchun pul mablag‘lari yoki boshqa
                          qimmatliklar ko‘rinishida:</em></p>
                        <ul>
                          <li><em>pora taklif qilmaslik;</em></li>
                          <li><em>va’da bermaslik;</em></li>
                          <li><em>pul to‘lamaslik, tovlamachilik qilmaslik;</em></li>
                          <li><em>bevosita yoki bilvosita pora olishga rozilik
                            bermaslik;</em></li>
                          <li><em>pora olmaslik;</em></li>
                          <li><em>biron-bir shaxs foydasiga yoki biron-bir shaxs
                            xizmatlaridan foydalanmaslik;</em></li>
                          <li><em>mol-mulk yoki mulkiy huquqlarni olmaslik;</em></li>
                          <li><em>o‘z vakolatlarini suiiste’mol qilmaslik.</em></li>
                        </ul>
                        <p><em>- O‘zbekiston Respublikasining “Ta’lim to‘g‘risida”gi
                          Qonuni, O‘zbekiston Respublikasi Prezidentining Farmonlari,
                          Qarorlarida belgilangan vazifalar ijrosi yuzasidan Vazirlar
                          Mahkamasi va vazirlikning buyruq va hay’at qarorlari ijrosini
                          o‘z vaqtida sifatli bajarilishini ta’minlash va bu borada
                          xodimlar mas’uliyatini oshirish choralarini ko‘radi.</em></p>
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
                          2010-2015&nbsp;yy. - Janubiy Koreya, Kimchhe shahridagi “Samsung
                          Jeong Mi” korxonasida ishchi, liniya rahbari, yetakchi
                          mutaxassis;<br/>
                          2012-2015&nbsp;yy. - Janubiy Koreya, Kimchhe shahridagi “Global
                          English” o‘quv markazida katta yoshdagi tinglovchilarning kechki
                          ingliz tili kurslarida o‘qituvchi yordamchisi (part-time teacher
                          assistant);<br/>
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
                      <img src={person} alt="Prorector"/>
                    </div>
                    <div className="details">
                      <h3 className="name">Rajabov Sherzod Umurzoqovich</h3>
                      <p className="role">
                        Pedagogik innovatsiyalar bo‘yicha prorektor
                      </p>

                      <div className="divider"></div>

                      <div className="contact-row">
                        <a href="tel:+998555080667" className="pill">
                          <i
                              style={{color: "rgba(20, 95, 203, 1)"}}
                              className="fa-solid fa-phone"
                          ></i>
                          +998 55 508 06‑67 (1003)
                        </a>
                        <a href="mailto:info@avloniy.uz" className="pill">
                          <i
                              style={{color: "rgba(15, 190, 85, 1)"}}
                              className="fa-solid fa-envelope"
                          ></i>
                          info@avloniy.uz
                        </a>
                      </div>

                      <div className="btn-row">
                        <button className="dropdown-btn">
                          Mehnat faoliyati
                          <i className="fa-solid fa-caret-down"></i>
                        </button>
                        <button className="dropdown-btn">
                          Vazifalari
                          <i className="fa-solid fa-caret-down"></i>
                        </button>
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
