import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../pages/home';
import SearchPage from '../pages/searchPage';
import LoginPage from '../pages/login';
import RegisterPage from '../pages/register';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
    {  path: '',
      element: <Home/>
    },
    {  path: 'search',
      element: <SearchPage/>
    },
    {  path: 'login',
      element: <LoginPage/>
    },
    {  path: 'register',
      element: <RegisterPage/>
    }
    ]
  }
]);

export default router;