import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <p>HomePage</p>
      <Link to={"/movies"}> MOVIES </Link>
    </>
  );
}
