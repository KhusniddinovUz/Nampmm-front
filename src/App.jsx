import './App.css';
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css"
import "./styles/font-awesome.min.css";
import "./styles/slicknav.min.css";
import "./styles/animate.min.css";
import "./styles/normalize.css";
import "./styles/responsive.css";

import React, {useEffect} from "react";
import HomePage from "./pages/HomePage/HomePage.jsx";
import AboutPage from "./pages/AboutPage/AboutPage.jsx";
import RahbariyatPage from "./pages/RahbariyatPage/RahbariyatPage.jsx";
import NotFoundPage from "./pages/404Page/404Page.jsx";
import NewsPage from "./pages/NewsPage/NewsPage.jsx";
import SingleNewsPage from "./pages/SingleNewsPage/SingleNewsPage.jsx";
import SorovnomaPage from "./pages/SorovnomaPage/SorovnomaPage.jsx";
import TuzilmaPage from "./pages/TuzilmaPage/TuzilmaPage.jsx";
import HamkorlikPage from "./pages/HamkorlikPage/HamkorlikPage.jsx";
import KafedralarPage from "./pages/KafedralarPage/KafedralarPage.jsx";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop.jsx";
import {Route, Routes} from "react-router";
import {useDispatch} from "react-redux";
import {incrementViewCount} from "./store/metricsSlice.js";
import AniqFanlarKafedraPage
  from "./pages/Kafedralar/AniqFanlarKafedraPage/AniqFanlarKafedraPage.jsx";
import IqtisodiyFanlarKafedraPage
  from "./pages/Kafedralar/IqtisodiyFanlarKafedraPage/IqtisodiyFanlarKafedraPage.jsx";
import PedagogikaFanlarKafedraPage
  from "./pages/Kafedralar/PedagogikaFanlarKafedraPage/PedagogikaFanlarKafedraPage.jsx";
import MaxsusTalimKafedraPage
  from "./pages/Kafedralar/MaxsusTalimKafedraPage/MaxsusTalimKafedraPage.jsx";
import TarkibiyBolimlarPage from "./pages/TarkibiyBolimlarPage/TarkibiyBolimlarPage.jsx";
import FotogalareyaPage from "./pages/FotogalareyaPage/FotogalareyaPage.jsx";
import VideogalareyaPage from "./pages/VideogalareyaPage/Videogalareya.jsx";
import BoshIshOrinlariPage from "./pages/BoshIshOrinlariPage/BoshIshOrinlariPage.jsx";
import AkademikFaoliyatPage
  from "./pages/TarkibiyBolimlar/AkademikFaoliyatPage/AkademikFaoliyatPage.jsx";
import FanlarPage from "./pages/TarkibiyBolimlar/FanlarPage/FanlarPage.jsx";
import KasbiyTalimPage
  from "./pages/TarkibiyBolimlar/KasbiyTalimPage/KasbiyTalimPage.jsx";
import MaktabgachaTalimPage
  from "./pages/TarkibiyBolimlar/MaktabgachaTalimPage/MaktabgachaTalimPage.jsx";
import MetodikXizmatPage
  from "./pages/TarkibiyBolimlar/MetodikXizmatPage/MetodikXizmatPage.jsx";
import MoliyaPage from "./pages/TarkibiyBolimlar/MoliyaPage/MoliyaPage.jsx";
import TalimNazoratPage
  from "./pages/TarkibiyBolimlar/TalimNazoratPage/TalimNazoratPage.jsx";
import TexnologiyaPage
  from "./pages/TarkibiyBolimlar/TexnologiyaPage/TexnologiyaPage.jsx";
import XojalikPage from "./pages/TarkibiyBolimlar/XojalikPage/XojalikPage.jsx";
import QaytaTayyorlashPage from "./pages/QaytaTayyorlashPage/QaytaTayyorlashPage.jsx";
import ELibraryPage from "./pages/ELibraryPage/ELibraryPage.jsx";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(incrementViewCount());
  }, [])

  return (
      <>
        <ScrollToTop/>
        <Routes>
          <Route index element={<HomePage/>}/>

          <Route path="institut">
            <Route path="haqida" element={<AboutPage/>}/>
            <Route path="rahbariyat" element={<RahbariyatPage/>}/>
            <Route path="tuzilma" element={<TuzilmaPage/>}/>
            <Route path="hamkorlik" element={<HamkorlikPage/>}/>
            <Route path="ish-orinlari" element={<BoshIshOrinlariPage/>}/>
            <Route path="kafedralar" element={<KafedralarPage/>}/>
            <Route path="kafedralar/aniq-fanlar" element={<AniqFanlarKafedraPage/>}/>
            <Route path="kafedralar/iqtisodiy-fanlar"
                   element={<IqtisodiyFanlarKafedraPage/>}/>
            <Route path="kafedralar/pedagogika-fanlar"
                   element={<PedagogikaFanlarKafedraPage/>}/>
            <Route path="kafedralar/maxsus-talim" element={<MaxsusTalimKafedraPage/>}/>
            <Route path="tarkibiy-bolimlar" element={<TarkibiyBolimlarPage/>}/>
            <Route path="tarkibiy-bolimlar/akademik-faoliyat"
                   element={<AkademikFaoliyatPage/>}/>
            <Route path="tarkibiy-bolimlar/fanlar" element={<FanlarPage/>}/>
            <Route path="tarkibiy-bolimlar/kasbiy-talim" element={<KasbiyTalimPage/>}/>
            <Route path="tarkibiy-bolimlar/maktabgacha-talim"
                   element={<MaktabgachaTalimPage/>}/>
            <Route path="tarkibiy-bolimlar/metodik-xizmat"
                   element={<MetodikXizmatPage/>}/>
            <Route path="tarkibiy-bolimlar/moliya" element={<MoliyaPage/>}/>
            <Route path="tarkibiy-bolimlar/talim-nazorat" element={<TalimNazoratPage/>}/>
            <Route path="tarkibiy-bolimlar/texnologiya" element={<TexnologiyaPage/>}/>
            <Route path="tarkibiy-bolimlar/xojalik" element={<XojalikPage/>}/>
          </Route>

          <Route path="talim-xizmatlari">
            <Route path="qayta-tayyorlash" element={<QaytaTayyorlashPage/>}/>
          </Route>

          <Route path="sorovnoma" element={<SorovnomaPage/>}/>

          <Route path="news" element={<NewsPage/>}/>
          <Route path="news/:slug" element={<SingleNewsPage/>}/>

          <Route path="arm">
            <Route path="e-library" element={<ELibraryPage/>}/>
          </Route>

          <Route path="photos" element={<FotogalareyaPage/>}/>
          <Route path="videos" element={<VideogalareyaPage/>}/>


          <Route path="*" element={<NotFoundPage/>}/>

        </Routes>
      </>
  )
}

export default App
