import Navbar from './components/Navbar';
import {
  BrowserRouter as Routes,
  Route,
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import Home from './components/pages/Home';
import Profile from './components/pages/Profile';
import NotFound from './components/pages/NotFound';
import TopSongs from './components/pages/TopSongs';
import React from 'react';
import { GoogleOAuthProvider } from '@react-oauth/google';

export default function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Navbar />,
      children: [
        { path: '/', element: <Home /> },
        { path: '/Profile', element: <Profile /> },
        { path: '/TopSongs', element: <TopSongs /> },
        { path: '/*', element: <NotFound /> },
      ],
    },
  ]);

  return (
    <GoogleOAuthProvider clientId="775437651388-succhl8nguuo9v4vev1djqdib84k79mq.apps.googleusercontent.com">
      <RouterProvider router={router} />
    </GoogleOAuthProvider>
  );
}
