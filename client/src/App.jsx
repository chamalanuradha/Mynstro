import { Routes, Route } from "react-router-dom";

import UserLayout from "./layouts/userlayout";
import AdminLayout from "./layouts/adminlayout";

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
import Users from "./pages/admin/userpage";

export default function App() {
  return (
    <Routes>

      {/* 🔹 Public Layout */}
      <Route element={<UserLayout />}>
        <Route path="/" element={<Landing />} />
        <Route path="/beauty" element={<Beauty />} />
        <Route path="/fashion" element={<Fashion />} />
        <Route path="/shoes" element={<Shoes />} />
        <Route path="/jewellery" element={<Jewllery />} />
        <Route path="/spectacles" element={<Spectacles />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/disscounts" element={<Disscount />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/aboutus" element={<AboutUs />} />
      </Route>

      {/* 🔹 Auth pages (no layout) */}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />

      {/* 🔹 Admin Layout */}
      <Route element={<AdminLayout />}>
        <Route path="/admindashboard" element={<Admindashboard />} />
        <Route path="/admin/users" element={<Users />} />
      </Route>

      {/* 🔹 404 */}
      <Route path="*" element={<div>404 Not Found</div>} />

    </Routes>
  );
}
