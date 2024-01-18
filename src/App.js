import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import LoginPage from "./Pages/LoginPage/LoginPage";
import HomePage from "./Pages/HomePage/HomePage";
import Header from "./Components/Header/Header";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Spinner from "./Components/Spinner/Spinner";
import Footer from "./Components/Footer/Footer";
import DetailPage from "./Pages/DetailPage/DetailPage";

function App() {
  return (
    <>
      <Spinner/>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/detail/:idPhim" element={<DetailPage />} />
        </Routes>
      <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
