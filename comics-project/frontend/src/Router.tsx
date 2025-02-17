import { createBrowserRouter } from 'react-router-dom';
import CharactersPage from './pages/CharactersPage';
import Home from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';
import NotFound from './pages/NotFound';
import LoginPage from './pages/LoginPage';
import Navbar from './components/Navbar';
import ProtectedRoute from './components/ProtectedRoute';
import CharacterPage from './pages/CharacterPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Navbar />,
    children: [
      {
        path: '/',
        element: <Home />,
        index: true,
      },
      {
        path: '/characters',
        element: (
          <ProtectedRoute>
            <CharactersPage />
          </ProtectedRoute>
        ),
      },
      {
        path: '/characters/:id',
        element: (
          <ProtectedRoute>
            <CharacterPage />
          </ProtectedRoute>
        ),
      },
      {
        path: '/profile',
        element: (
          <ProtectedRoute>
            <ProfilePage />
          </ProtectedRoute>
        ),
      },
      { path: '/login', element: <LoginPage /> },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);
