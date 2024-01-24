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
import NotFoundPage from "./Pages/NotFoundPage/NotFoundPage";
import FormLogin from "./Pages/LoginPage/FormLogin";
import FormSignup from "./Pages/LoginPage/FormSignup";
import Layout from "./Layouts/Layout";
import BookingMovie from "./Pages/BookingMovie/BookingMovie";
import PrivateLayout from "./Layouts/PrivateLayout";
// import FormLogin from "./Pages/LoginPage/FormLogin";

function App() {
  return (
    <>
      <Spinner />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<Layout />}>
            <Route path="/account" element={<FormLogin />} />
            <Route path="/signup" element={<FormSignup />} />
          </Route>
          <Route path="/detail/:idPhim" element={<DetailPage />} />
          <Route
            path="/booking"
            element={
              <PrivateLayout>
                <BookingMovie />
              </PrivateLayout>
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
