import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import Landing from "./pages/landing";
import LoginPage from "./pages/login";
import RegisterPage from "./pages/register";
import Home from "./pages/home";

function App() {
  const location = useLocation();

  const hideLayout = ["/login", "/register"].includes(location.pathname);

  return (
    <>
      {!hideLayout && <Header />}

      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </main>

      {!hideLayout && <Footer />}
    </>
  );
}

export default App;
