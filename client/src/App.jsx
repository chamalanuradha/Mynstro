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

import Admindashboard from "./pages/admin/dashboard";
import Users from "./pages/admin/userpage";
import Product from "./pages/admin/productpage";
import Offerspage from "./pages/admin/offerspage";
import Disscountpage from "./pages/admin/disscountpage";
import Settings from "./pages/admin/settingspage";
import AddUser from "./pages/admin/adduser";
import UpdateUser from "./pages/admin/updateuser";


export default function App() {
  return (
    <Routes>

  
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

     
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />

    
      <Route element={<AdminLayout />}>
        <Route path="/admin/dashboard" element={<Admindashboard />} />
        <Route path="/admin/users" element={<Users />} />
        <Route path="/admin/products" element={<Product />} />
        <Route path="/admin/offers" element={<Offerspage />} />
        <Route path="/admin/disscounts" element={<Disscountpage />} />
        <Route path="/admin/settings" element={<Settings />} />
        <Route path="/admin/adduser" element={<AddUser />} />
        <Route path="/admin/updateuser/:id" element={<UpdateUser />} />

      </Route>


      <Route path="*" element={<div>404 Not Found</div>} />

    </Routes>
  );
}
