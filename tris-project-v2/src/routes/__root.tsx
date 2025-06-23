import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import Button from '@mui/material/Button';
import App from "../app";

export const Route = createRootRoute({
  component: () => (
    <App>
      <div className="p-2 flex gap-2">
        <Button component={Link} to="/" variant="contained" className="home-button">
        Home
        </Button>
        <Button component={Link} to="/PvP" variant="contained" className="pvp-button">
        PvP
        </Button>
        <Button component={Link} to="/PvBot" variant="contained" className="bot-button">
        PvBot
        </Button>
      </div>
      <hr />
      <Outlet />
      <TanStackRouterDevtools />
    </App>
  ),
});
