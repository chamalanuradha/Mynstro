import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import Landing from "./pages/landing";
import LoginPage from "./pages/login";
import RegisterPage from "./pages/register";
import Contact from "./pages/contact";
import AboutUs from "./pages/aboutus";
import Beauty from "./pages/beauty";
import Fashion from "./pages/fashion";
import Shoes from "./pages/shoes";
import Jewllery from "./pages/jewellery";
import Spectacles from "./pages/spectacles";
import Offers from "./pages/offers";
import Disscount from "./pages/disscounts";

import Admindashboard from "./pages/admin/admindashboard";

export default function App() {
  const location = useLocation();

  const noLayoutRoutes = ["/login", "/register", "/admindashboard"];
  const validRoutes = ["/", "/login", "/register", "/home", "/contact", "/aboutus", "/beauty", "/fashion", "/shoes", "/jewellery", "/spectacles", "/offers", "/disscounts"];

  const is404 = !validRoutes.includes(location.pathname);
  const hideLayout = noLayoutRoutes.includes(location.pathname) || is404;

  return (
    <>
      {!hideLayout && <Header />}

      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/beauty" element={<Beauty />} />
          <Route path="/fashion" element={<Fashion />} />
          <Route path="/shoes" element={<Shoes />} />
          <Route path="/jewellery" element={<Jewllery />} />
          <Route path="/spectacles" element={<Spectacles />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/disscounts" element={<Disscount />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/aboutus" element={<AboutUs />} />

          <Route path="/admindashboard" element={<Admindashboard />} />
          <Route path="*" element={<div>404 Not Found</div>} />
        </Routes>
      </main>

      {!hideLayout && <Footer />}
    </>
  );
}
