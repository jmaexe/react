import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

export const Route = createRootRoute({
  component: () => (
    <>
      <Navbar />
      <Outlet />
      <Footer />
      <TanStackRouterDevtools />
    </>
  ),
});
