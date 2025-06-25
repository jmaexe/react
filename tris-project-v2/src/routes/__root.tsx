import { createRootRoute, Outlet } from "@tanstack/react-router";
import foto4 from "../assets/images/foto-4.jpg";
import "../index.css";

export const Route = createRootRoute({
  component: () => (
    <>
      <div
        style={{
          backgroundImage: `url(${foto4})`,
          width: "100%",
          height: "100vh",
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: -10,
          position: "absolute",
          top: 0,
          left: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
        }}
      >
        <Outlet />
      </div>
    </>
  ),
});
