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
            <Route path="kafedralar" element={<KafedralarPage/>}/>
            <Route path="kafedralar/aniq-fanlar" element={<AniqFanlarKafedraPage/>}/>
          </Route>

          <Route path="sorovnoma" element={<SorovnomaPage/>}/>

          <Route path="news" element={<NewsPage/>}/>
          <Route path="news/:slug" element={<SingleNewsPage/>}/>

          <Route path="*" element={<NotFoundPage/>}/>

        </Routes>
      </>
  )
}

export default App
