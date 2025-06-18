import { createFileRoute } from "@tanstack/react-router";
import HeroContent from "../components/Hero/HeroContent";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <HeroContent />
    </>
  );
}
