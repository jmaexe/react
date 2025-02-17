import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Movie } from "@/types/Movie";
const MovieCard = ({ data }: { data: Movie }) => {
  return (
    <Card key={data.id} className="relative overflow-hidden">
      {/* <BackgroundImage id={data.id} path={data.backdrop_path} size="original" /> */}
      <CardHeader>
        <CardTitle>{data.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>Popularity: {data.popularity}</CardDescription>
      </CardContent>
      <CardFooter>
        <CardDescription>Release date: {data.release_date}</CardDescription>
      </CardFooter>
    </Card>
  );
};

export default MovieCard;
