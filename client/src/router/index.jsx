import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../pages/home';

const router = createBrowserRouter([
  {
    path: '/main',
    element: <App />,
    children: [
    {  path: 'page',
      element: <Home/>
    }
    ]
  }
]);

export default router;