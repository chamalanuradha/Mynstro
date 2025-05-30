import { Outlet, useLocation } from 'react-router-dom'
import './App.css'
import Header from './components/header'
import Footer from './components/footer'

function App() {
  const location = useLocation();

  const hideHeaderFooter = ['/login', '/register'];

  const shouldHide = hideHeaderFooter.includes(location.pathname);

  return (
    <>
      {!shouldHide && <Header />}
      <main className='min-h-[80vh]'>
        <Outlet />
      </main>
      {!shouldHide && <Footer />}
    </>
  );
}

export default App;
