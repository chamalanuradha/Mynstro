import { Routes, Route } from "react-router-dom";
import Landing from "./pages/landing";
import LoginPage from "./pages/login";
import RegisterPage from "./pages/register";
import Home from "./pages/home";

function App() {
  return (
    <>
  

      <main className="min-h-[80vh]">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </main>


    </>
  );
}

export default App;
