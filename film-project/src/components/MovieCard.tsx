import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getBackgroundImage } from "@/services/api/Img";
import { Movie } from "@/types/Movie";
const MovieCard = ({ data }: { data: Movie }) => {
  return (
    <Card
      key={data.id}
      className="relative"
      style={{
        backgroundImage: `url(${getBackgroundImage(data.backdrop_path, "original")})`,
        backgroundSize: "cover",
      }}
    >
      <CardHeader>
        <CardTitle>{data.title}</CardTitle>
      </CardHeader>
      <CardContent></CardContent>
      <CardFooter></CardFooter>
    </Card>
  );
};

export default MovieCard;
