import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import Landing from "./pages/landing";
import LoginPage from "./pages/login";
import RegisterPage from "./pages/register";
import Home from "./pages/home";
import Contact from "./pages/contact";
import AboutUs from "./pages/aboutus";

export default function App() {
  const location = useLocation();

  const noLayoutRoutes = ["/login", "/register"];
  const validRoutes = ["/", "/login", "/register", "/home", "/contact", "/aboutus"];

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
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="*" element={<div>404 Not Found</div>} />
        </Routes>
      </main>

      {!hideLayout && <Footer />}
    </>
  );
}
