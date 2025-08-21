import './App.css';
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css"
import "./styles/font-awesome.min.css";
import "./styles/slicknav.min.css";
import "./styles/animate.min.css";
import "./styles/normalize.css";
import "./styles/responsive.css";

import HomePage from "./pages/HomePage/HomePage.jsx";
import RahbariyatPage from "./pages/RahbariyatPage/RahbariyatPage.jsx";
import NotFoundPage from "./pages/404Page/404Page.jsx";
import NewsPage from "./pages/NewsPage/NewsPage.jsx";
import {Route, Routes} from "react-router";


function App() {
  return (
      <Routes>
        <Route index element={<HomePage/>}/>

        <Route path="institut">
          <Route path="rahbariyat" element={<RahbariyatPage/>}/>
        </Route>

        <Route path="news" element={<NewsPage/>}/>

        <Route path="*" element={<NotFoundPage/>}/>

      </Routes>
  )
}

export default App
