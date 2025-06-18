import { createFileRoute } from "@tanstack/react-router";
import HeroContent from "../components/Hero/HeroContent";

export const Route = createFileRoute("/home")({ component: () => Home });

const Home = () => {
  return (
    <div>
      <HeroContent />
    </div>
  );
};
