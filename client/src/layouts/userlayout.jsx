import { Outlet } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";

export default function UserLayout() {
  return (
    <>
      <Header />
      <main className="min-h-170">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
