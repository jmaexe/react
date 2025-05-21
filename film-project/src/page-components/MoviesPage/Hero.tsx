import sfondo from "@/assets/sfondo.jpg";
import ShadowCard from "@/components/ShadowCard";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";

const Hero = () => {
  return (
    <div className="w-full h-screen  flex flex-col items-center justify-center ">
      <ShadowCard />
      <img
        src={sfondo}
        alt=""
        className="absolute top-0 left-0 bg-cover w-full h-screen -z-20 "
      />

      <div className="text-pretty text-center flex flex-col items-center justify-center">
        <div className="max-w-2/3 w-full space-y-4">
          <h1 className="font-bold text-5xl text-white">
            The Best Streaming Experience
          </h1>
          <p className="text-lg">
            StreamVibe is the best streaming experience for watching your
            favorite movies and shows on demand, anytime, anywhere. With
            StreamVibe, you can enjoy a wide variety of content, including the
            latest blockbusters, classic movies, popular TV shows, and more. You
            can also create your own watchlists, so you can easily find the
            content you want to watch.
          </p>
          <a href="#categories">
            <Button
              variant={"default"}
              className="bg-red-600 text-white hover:bg-red-500 transition-colors duration-200 py-6 px-5"
            >
              Start Watching Now
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
