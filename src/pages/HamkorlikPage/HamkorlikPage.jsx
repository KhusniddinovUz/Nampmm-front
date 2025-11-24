import React, {useState} from "react";
import Navbar from "../../components/Navbar/Navbar.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import Marquee from "react-fast-marquee";
import banner from "../../assets/rahbariyat/banner.jpg";
import bannerVector from "../../assets/rahbariyat/banner-vector.png";
import bannerBuilding from "../../assets/rahbariyat/banner-building.svg";
import {NavLink} from "react-router";
import PageSideMenu from "../../components/PageSideMenu/PageSideMenu.jsx";
import {markazLinks} from "../../constants.js";
import "./HamkorlikPage.css";


const HamkorlikPage = () => {
  const [toggle1, setToggle1] = useState(true);
  const [toggle2, setToggle2] = useState(true);
  const [toggle3, setToggle3] = useState(true);
  return (<div id="hamkorlik-page">
    <Navbar style={{color: "#002d6d"}}/>

    <div className="hamkorlik-page-content-wrapper">
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
            <li>Xalqaro Hamkorlik</li>
          </ul>
          <h2>Xalqaro Hamkorlik</h2>
        </div>
      </section>

      <section className="hamkorlik-page-content">
        <div className="hamkorlik-page-content-left">
          <div className="hamkorlik-toggle-item">
            <div className="hamkorlik-toggle-header">
              <h5>A.Avloniy nomidagi milliy-tadqiqot instituti tomonidan xalqaro
                hamkorliklar o‘rnatilgan tashkilotlar nomi</h5>

              {toggle1 ? (<button onClick={() => setToggle1(false)}
                                  className="hamkorlik-toggle-button">
                <i className="fa-solid fa-plus"></i>
              </button>) : (<button onClick={() => setToggle1(true)}
                                    className="hamkorlik-toggle-button cancel-toggle-button">
                <i className="fa-solid fa-x"></i>
              </button>)}
            </div>
            {!toggle1 && (<div className="hamkorlik-toggle-content">
              <p>
                <strong>Belarus Fanlar akademiyasining informatika muammolari
                  birlashgan institutiga </strong> bilan 2021-yilda 5 yilga
                mo‘ljallangan memorandum imzolangan. Hozirda, mazkur ta’lim
                muassasi
                bilan stajirovka masalasida kelishuvga erishildi.
              </p>
              <p>
                <strong>Diplomdan keyingi ta’lim akademiyasi</strong> bilan
                2023-yilda 5 yilga mo‘ljallangan memorandum imzolangan. Hozirda,
                mazkur tashkilot bilan “Yo‘l xaritasi” tuzilgan bo‘lib, unda
                ta’lim muassalarining ilmiy-tadqiqot bo‘limlari o‘zaro ma’lumot va
                tajriba almashish, birgalikda seminar va konferensiyalar tashkil
                etish hamda qisqa muddatli stajirovkalarni amalga oshirish
                belgilangan.
              </p>
              <p>
                <strong>Rossiya ta’lim akademiyasi</strong> (RAO) bilan
                hamkorlikda ilmiy tadqiqotlar oʻtkazishga, pedagoglarga yangi
                metodikalarni oʻrgatuvchi rus tilidagi malaka oshirish
                materiallarini oʻzaro almashishga, kelgusida hamkorlikda
                konkurslar tashkil etishga va institut xodimlarini Rossiya ta’lim
                akademiyasiga qisqa muddatli stajirovkalarga yuborishga kelishib
                olindi.
              </p>
              <p>
                <strong>Koreya o‘quv dasturlari va baholash instituti
                  (KICE)</strong> bilan xat yozishmalari amalga oshirildi.
                Hozirda, mazkur ta’lim muassasi bilan tomonlar o‘rtasida
                memorandum imzolash va stajirovka tashkil etish masalalarida
                kelishuvlar olib borilmoqda.
              </p>
              <p>
                <strong>Koreya ta’limni rivojlantirish instituti</strong> (KEDI)
                va A.Avloniy nomidagi milliy tadqiqot instituti hamkorlikda ilmiy
                tadqiqotlar oʻtkazish, seminarlar va konferensiyalar tashkil etish
                hamda Koreya ta’limni rivojlantirish institutining yuqori malakali
                professor oʻqituvchilarini jalb qilish va A.Avloniy nomidagi
                milliy-tadqiqot instituti xodimlarini Koreya ta’limni
                rivojlantirish institutida kasbiy mahoratini oshirishga qaratilgan
                stajirovkalarni tashkil etish to‘g‘risida kelishib olindi.
              </p>
              <p>
                <strong>Finlyandiya akademiyasi</strong> (Suomen Akatemia) bilan
                xat yozishmalari amalga oshirildi. Hozirda, mazkur ta’lim muassasi
                bilan tomonlar o‘rtasida memorandum imzolash va stajirovka tashkil
                etish masalalarida kelishuvlar olib borilmoqda.
              </p>
              <p>
                <strong>Aminuddin Baki nomidagi Ta’limning rahbar xodimlarini
                  qayta tayyorlash va malakasini oshirish instituti</strong> bilan
                hamkorlikda ilmiy tadqiqotlar oʻtkazish, seminarlar va
                konferensiyalar tashkil etish kelishinildi hamda
                2023-yilning18-dekabrida “O‘zbekiston ta’lim tizimida
                direktorlarni tayinlash va baxolash” mavzusida vebinar tashkil
                etildi (vebinar havolasi ilova qilinmoqda
                https://youtu.be/mzV5eBFz3yA).
              </p>
              <p>
                <strong>Ozarbayjon Respublikasi Milliy ta’lim instituti </strong>bilan
                2024-yilda 5 yilga mo‘ljallangan memorandum imzolangan. Hozirda,
                mazkur ta’lim muassasi bilan malaka oshirish materiallarini oʻzaro
                almashishga, kelgusida hamkorlikda konkurslar tashkil etishga
                hamda birgalikda onlayn seminar va konferensiyalar o‘tkazishga
                kelishib olindi.
              </p>
              <p>
                <strong>Tojikiston Respublikasi Pedagoglarni malakasini oshirish
                  va qayta tayyorlash instituti</strong> bilan 2024-yilda 3 yilga
                mo‘ljallangan memorandum imzolangan. Hozirda, pedagoglarga yangi
                metodikalarni oʻrgatuvchi malaka oshirish materiallarini oʻzaro
                almashishga, kelgusida hamkorlikda konferensiyalar tashkil etishga
                va institut xodimlarini mazkur institutga qisqa muddatli
                stajirovkalarga yuborishga kelishib olindi.
              </p>
              <p>
                <strong>Qirg‘iziston Respublika Pedagoglarni malakasini oshirish
                  va qayta tayyorlash instituti</strong> bilan 2024-yilda 3 yilga
                mo‘ljallangan memorandum imzolangan. Hozirda, pedagoglarga yangi
                metodikalarni oʻrgatuvchi malaka oshirish materiallarini oʻzaro
                almashishga, kelgusida hamkorlikda konferensiyalar tashkil etishga
                va institut xodimlarini mazkur institutga qisqa muddatli
                stajirovkalarga yuborishga kelishib olindi.
              </p>
              <p>
                <strong></strong>
              </p>
            </div>)}
          </div>
          <div className="hamkorlik-toggle-item">
            <div className="hamkorlik-toggle-header">
              <h5>2022-yilda A.Avloniy nomidagi ilmiy-tadqiqot institutining xalqaro
                hamkorliklari</h5>
              {toggle2 ? (<button onClick={() => setToggle2(false)}
                                  className="hamkorlik-toggle-button">
                <i className="fa-solid fa-plus"></i>
              </button>) : (<button onClick={() => setToggle2(true)}
                                    className="hamkorlik-toggle-button cancel-toggle-button">
                <i className="fa-solid fa-x"></i>
              </button>)}
            </div>
            {!toggle2 && (<div className="hamkorlik-toggle-content">
              <p><strong>Xalqaro konferensiyalar soni (2022): 3 ta</strong></p>
              <p className="hamkorlik-toggle-content-opacity-text">
                2022-yil 25-26-mart, “Xalqaro baholash dasturlari va taʼlim
                sifatini tadqiq etishning dolzarb muammolari”, Tashkilotchilar:
                Xalq ta’limi vazirligi, A.Avloniy nomidagi milliy-tadqiqot
                instituti, UNICEF tashkilot <br/>
                2022-yil 4-may, “Oʻzbekiston maktablarida STE(A)M: buguni va
                ertasi” Tashkilotchilar: A.Avloniy nomidagi ilmiy-tadqiqot
                instituti, AQSHning Shimoliy Jorjiya universiteti hamda
                Innovatsiya, Texnologiya, Strategiya Markazi (ITSM)<br/>
                2022-yil 15-noyabr, “Umumiy o‘rta ta’limni rivojlantirish
                strategiyasi yo‘nalishida fundamental va amaliy tadqiqotlar”,
                Tashkilotchilar: Xalq ta’limi vazirligining A.Avloniy nomidagi
                pedagoglarni kasbiy rivojlantirish va yangi metodikalarga
                o‘rgatish milliy-tadqiqot instituti, O‘zbеkiston Rеspublikasi
                Vazirlar Mahkamasi huzuridagi Ta’lim sifatini nazorat qilish
                davlat inspеksiyasi hamda Rossiya ta’lim akademiyasining Ta’limni
                rivojlantirish strategiyalari instituti
              </p>
              <p><strong>Xalqaro forumlar soni (2022): 1 ta</strong></p>
              <p className="hamkorlik-toggle-content-opacity-text">
                2022-yilning 23-24-noyabr, “Zamonaviy maktabda o‘qitish
                metodikasi: muammolar va innovatsion yechimlar” o‘zbek-rus taʼlim
                forumi, Tashkilotchilar: Xalq taʼlimi vazirligi, A.Avloniy
                nomidagi milliy tadqiqot instituti va Gertsen nomidagi Rossiya
                davlat pedagogika universiteti
              </p>
              <p><strong>Xalqaro seminar-treninglar soni: 3 ta</strong></p>
              <p className="hamkorlik-toggle-content-opacity-text">
                2022-yil 15-17-oktabr, “Oʻqituvchining kasb standartini amaliyotga
                tatbiq etish”, ekspert: Majena Rafalska, Hamkor tashkilot:
                UNICEF <br/>
                2022-yil 4-9-oktabr, “Finalyandiya ta’lim tajribalari 1”, jami 130
                nafar boshlangʻich ta’lim oʻqituvchilari malakasi oshirildi <br/>
                2022-yil 13-17-dekabr, “Finalyandiya ta’lim tajribalari 2”, jami
                80 nafar boshlangʻich ta’lim oʻqituvchilari malakasi oshirildi
              </p>
              <p><strong>Xalqaro forum, simpozium va konferensiyalarda institut
                ishtiroki: 4 ta</strong></p>
              <p className="hamkorlik-toggle-content-opacity-text">
                18-04-2022 - Qiyosiy va xalqaro ta’lim jamiyati (Comperative and
                International Education Society) xalqaro konferensiyasi – “Illuminating
                the Power of Idea / lism” <br/>
                10.2022 – UNESCO - Jaxon Banki – “Malakali oʻqituvchi - malakali millat:
                Taʼlim boʻyicha Markaziy Osiyo simpoziumi” <br/>
                04-05.11.2022 – Turkiya – “II Istambul taʼlim sammiti” <br/>
                02-05.11.2022 – UNESCO, GIZ (Germaniya), EdNet – “Barqaror rivojlanish
                uchun taʼlim: mintaqaviy istiqbol va tajribalar” submintaqaviy
                konferensiya
              </p>
              <p><strong>Xalqaro onlayn seminar (vebinar)lar soni: 2 ta</strong>
              </p>
              <p className="hamkorlik-toggle-content-opacity-text">
                06.2022 – Yaponiya – “LESSON STUDY” <br/>
                07.2022 – AQSH – “Qualitative Research”
              </p>
              <p><strong>Tajriba almashish va tajriba ortirish dasturlari
                (stajirovka): 8 ta
              </strong></p>
              <p><strong>Stajirovka dasturlarida qatnashgan Instituti xodimlari
                soni: 12 ta
              </strong></p>
              <p className="hamkorlik-toggle-content-opacity-text">
                10-30.10.2022 – Yaponiya - JICA Hokuriku Center <br/>
                08.2022 – 17.12.2022 – AQSH - Pittsburg universiteti, Kanzas shtati <br/>
                03-06.10.2022 - Turkiya - Bagʻlarboshi madaniyat kongress markazi
                (Baglarbasi kultur kongre merkezi, Üsküdar, İstanbul) <br/>
                08-15-.07.2022 – Yaponiya - KEI Advanced va Digital Knowledge Co.
                Ltd. <br/>
                26-29.09.2022 – Turkiya - Ta’lim boʻyicha global hamkorlik tashkilotining
                Ta’lim sohasidagi bilim va innovatsiyalar almashinuvi tashabbusi (GPE
                KIX) <br/>
                15-22.08.2022 – Janubiy Koreya - Koreya Respublikasi Ta’lim vazirligi
                hamda Xorijda Xalqaro Koreya ta’limini rivojlantirish jamg‘armasi
                tomonidan tashkil etilgan xalqaro ilmiy konferensiya <br/>
                05-10.07.2022 – Fransiya - Iqtisodiy hamkorlik va taraqqiyot tashkiloti
                (OECD) <br/>
                08.2022 – 02-09.2022 – Germaniya - TALIS 2024 Xalqaro ta’lim markazi,
                Iqtisodiy hamkorlik va taraqqiyot tashkiloti (OECD)
              </p>
            </div>)}
          </div>
          <div className="hamkorlik-toggle-item">
            <div className="hamkorlik-toggle-header">
              <h5>2023-2024 yillardagi A.Avloniy nomidagi ilmiy-tadqiqot institutining
                xalqaro hamkorliklari</h5>
              {toggle3 ? (<button onClick={() => setToggle3(false)}
                                  className="hamkorlik-toggle-button">
                <i className="fa-solid fa-plus"></i>
              </button>) : (<button onClick={() => setToggle3(true)}
                                    className="hamkorlik-toggle-button cancel-toggle-button">
                <i className="fa-solid fa-x"></i>
              </button>)}
            </div>
            {!toggle3 && (<div className="hamkorlik-toggle-content">
              <p><strong>Xalqaro hamkor tashkilot, turdosh institut va universitetlar
                soni (2021-2024): 33 ta</strong></p>
              <p className="hamkorlik-toggle-content-opacity-text">
                Xalqaro rivojlanish tashkilotlari: <strong>7ta</strong> (UNESCO, UNICEF,
                JICA, American
                Councils, British Council, TICA, KOICA) <br/>
                Xalqaro moliyaviy institutlar: <strong>5 ta</strong> (Taʼlim boʻyicha
                xalqaro hamkorlik
                (GPE) tashkiloti, Osiyo taraqqiyot banki, Jaxon banki, Islom
                taraqqiyot banki, USAID) <br/>
                Mahalliy tashkilotlar: <strong>5 ta</strong> (Xorijiy tillar agentligi,
                Statistika
                qoʻmitasi,Edu-Action taʻlim markazi, “Barkamol avlod” bolalar
                maktablari, Nordik universiteti)<br/>
                Turdosh institutlar va tashkilotlar: <strong>8 ta</strong> (KEDI, KICE,
                RAO, ISRO,
                Malayziya taʼlim instituti, Aminuddin Baki Instituti, InterDom,
                Belarus informatika instituti, Belarus diplomdan keyingi
                akademiyasi,) <br/>
                Xalqaro taʼlim muassasalari: <strong>8 ta</strong> (Shimoliy Jorjiya
                universiteti,
                Ozarbayjon milliy ta’lim instituti, Tojikiston Respublikasi pedagog
                xodimlarning malakasini oshirish va qayta tayyorlash instituti,
                Qirg'iziston Respublika Pedagogika xodimlarining malakasini oshirish
                va qayta tayyorlash instituti, Jorj Meyson Universiteti, Gersen
                nomidagi Rossiya davlat universiteti, Germaniyaning Saksoniya kasbga
                oʻqitish markazi - Bildungswerk der Sächsischen Wirtschaft GGMBH)
              </p>
              <p><strong>Ushbu hamkor tashkilotlar bilan imzolangan memorandumlar soni
                (2021-2024): 21 ta</strong></p>
              <p className="hamkorlik-toggle-content-opacity-text">
                Xalqaro tashkilotlar: <strong>11 ta</strong> (Germaniyaning Saksoniya
                kasbga oʻqitish markazi (Bildungswerk der Sächsischen Wirtschaft GGMBH)
                RAO, ISRO, InterDom, Gersen, Belarus Informatika Instituti, Pskovskiy
                davlat universiteti, Ozarbayjon milliy ta’lim instituti, Tojikiston
                Respublikasi pedagog xodimlarning malakasini oshirish va qayta tayyorlash
                instituti,Qirg'iziston Respublika Pedagogika xodimlarining malakasini
                oshirish va qayta tayyorlash instituti, Belarus diplomdan keyingi
                akademiyasi, KEDI,UNG, KEI Advanced Inc, SixClouds Pte.Ltd.) <br/>
                Maxalliy: <strong>7 ta</strong> (Xorijiy tillar agentligi, Statistika
                qoʻmitasi, Cambridge Educational School – Tashkent, Xalqaro ta’lim
                universiteti, “Barkamol avlod” bolalar maktablari, Edu-Action ta’lim
                markazi, Nordik universiteti, Koreya ta’lim markazi.)
              </p>
              <p><strong>Xalqaro kelishuvlar (2023): 2 ta</strong></p>
              <p className="hamkorlik-toggle-content-opacity-text">
                Tsukuba universiteti – 09.07.2022 <br/>
                Digital Knowledge Co. Ltd. (Yaponiya) – 14.07.2022
              </p>
              <p><strong>Stajirovka dasturlarida qatnashgan Instituti xodimlari soni: 4
                ta</strong></p>
              <p className="hamkorlik-toggle-content-opacity-text">
                15-29.01.2023 – <strong>Finlyandiya</strong> - Muuramedagi tadbirkorlikka
                ixtisoslashtirilgan yuqori maktabi, Yuvaskila shahrida joylashgan
                Kuokkalan umumta’lim maktabi, Valteri maxsus ta’limga ehtiyojmand bolalar
                maktabi, GRADIA konsortiumiga kiruvchi yuqori maktab, Jyvaskyladagi
                Keljonkanjas o‘rta maktabi, Finlyandiya Akademiyasi, Finlyandiya ta’limni
                baholash markazi.
              </p>
              <p><strong>Stajirovka dasturlarida qatnashgan Instituti xodimlari soni: 1
                ta</strong></p>
              <p className="hamkorlik-toggle-content-opacity-text">
                2023-yil 8-iyundan 2023-yilning 28-iyun sanasiga qadar <strong>Xitoy Xalq
                Respublikasining</strong> Savdo vazirligi tomonidan tashkil etilishi
                rejalashtirilgan seminarlarda qatnashish uchun Institutning AKT va texnik
                ta’minot bo‘limi boshlig‘i <strong>Akmal Boboqulovning</strong> stajirovka
                oʻtashi ta’minlandi.
              </p>
              <p><strong>Xalqaro va Respublika miqyosidagi ilmiy-amaliy konferensiyalar
                soni: 2 ta </strong></p>
              <p className="hamkorlik-toggle-content-opacity-text">
                2023-yilning 15-16-sentabr sanalarida Estoniya davlatining Tallinn
                shahrida tashkil etilgan xalqaro <strong>STEAM konferensiyasi.</strong>
                <br/>
                2023-yilning 20-sentabrida Avloniy nomidagi milliy-tadqiqot institutida
                <strong>“Maktabgacha va maktab ta’limini samarali boshqarishning
                  demografik omillari”</strong> mavzusidagi ilmiy-amaliy konferensiyasi.
              </p>
            </div>)}
          </div>
        </div>
        <PageSideMenu title={"Markaz"} active="Xalqaro Hamkorlik"
                      links={markazLinks}/>
      </section>
    </div>

    <Footer/>
    <Marquee/>
  </div>)
};

export default HamkorlikPage;
