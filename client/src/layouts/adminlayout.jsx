import { Outlet } from "react-router-dom";
import AdminHeader from "../components/adminheader";
import Footer from "../components/footer";

export default function AdminLayout() {
  return (
    <>
      <AdminHeader />
      <main className="min-h-170">
        <Outlet />
      </main>
        <Footer />
    </>
  );
}
