import { getLogoImage, getPosterImage } from "@/services/api/Img";

type PosterImagePerGenreProps = {
  id: string;
};

const PosterImagePerGenre = ({ id }: PosterImagePerGenreProps) => {
  return (
    <img
      src={getPosterImage(id, "w342")}
      className="object-cover object-top w-full h-full"
    />
  );
};

export default PosterImagePerGenre;
