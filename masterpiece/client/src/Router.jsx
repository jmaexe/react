import { createBrowserRouter } from 'react-router-dom'
import Navbar from './Components/Navbar';
import Home from './pages/Home'
import Spotify from './pages/Spotify'
import Onepiece from './pages/Onepiece';



const router = createBrowserRouter([
  {
    path: '/',
    element: <Navbar />,
    
    children: [
      {
        path: '/',
        element: <Home />,
        index: true
      },
      {
        path: 'onepiece',
        element: <Onepiece />,
        
      },
      {
        path: 'spotify',
        element: <Spotify/>
      }

    ]
  }

])

export default router;