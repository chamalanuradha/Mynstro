import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../pages/home';
import SearchPage from '../pages/searchPage';
import LoginPage from '../pages/login';

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
    }
    ]
  }
]);

export default router;