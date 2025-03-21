import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../pages/home';
import SearchPage from '../pages/search';

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
    }
    ]
  }
]);

export default router;