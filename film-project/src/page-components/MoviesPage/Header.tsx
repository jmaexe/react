import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { useState } from "react";

type LabelBtn = "Popular" | "Now Playing" | "Top Rated";
type Btn = {
  label: LabelBtn;
  href: string;
};
const MoviesPageHeader = () => {
  const [activeButton, setActiveButton] = useState<LabelBtn>("Popular");
  const buttons: Btn[] = [
    {
      label: "Popular",
      href: "/movies/popular",
    },
    {
      label: "Now Playing",
      href: "/movies/now-playing",
    },
    {
      label: "Top Rated",
      href: "/movies/top-rated",
    },
  ];
  return (
    <div className="flex flex-col justify-between items-center m-0">
      <h1 className="text-4xl font-bold">Movies</h1>
      <div className="flex space-x-4">
        {buttons.map((button) => (
          <Link key={button.label} to={button.href}>
            <Button
              variant={activeButton === button.label ? "outline" : "default"}
              onClick={() => setActiveButton(button.label)}
            >
              {button.label}
            </Button>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MoviesPageHeader;
