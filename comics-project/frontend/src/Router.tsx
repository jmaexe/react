import { createBrowserRouter } from "react-router-dom";
import Error from "./components/Error";
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";
import CharacterPage from "./pages/CharacterPage";
import CharactersPage from "./pages/CharactersPage";
import ComicsPage from "./pages/ComicsPage";
import Home from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import NotFound from "./pages/NotFound";
import ProfilePage from "./pages/ProfilePage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    // errorElement: <div> errore</div>,
    children: [
      {
        path: "/",
        element: <Home />,
        index: true,
      },
      {
        path: "/characters",
        element: (
          <ProtectedRoute>
            <CharactersPage />
          </ProtectedRoute>
        ),
      },
      {
        path: "/characters/:id",
        element: (
          <ProtectedRoute>
            <CharacterPage />
          </ProtectedRoute>
        ),
      },
      {
        path: "/comics",
        element: (
          <ProtectedRoute>
            <ComicsPage />
          </ProtectedRoute>
        ),
      },
      {
        path: "/profile",
        element: (
          <ProtectedRoute>
            <ProfilePage />
          </ProtectedRoute>
        ),
      },
      { path: "/login", element: <LoginPage /> },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
