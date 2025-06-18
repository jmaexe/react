import { useQuery } from "@tanstack/react-query";
import { fetchComics } from "../api/Comics";
import ComicCard from "../components/ComicCard";
import List from "../components/List";
import { Comic } from "../models/Comics";

const ComicsPage = () => {
  const {
    data: comics,
    isLoading,
    error,
  } = useQuery<Comic[]>({
    queryKey: ["comics"],
    queryFn: fetchComics,
    refetchOnWindowFocus: false,
    refetchInterval: false,
    refetchIntervalInBackground: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
  });
  return (
    <div>
      <h1 className="text-4xl font-bold text-center mt-10">Comics Page</h1>
      <p className="text-center mt-4">
        This page will display a list of comics from the Marvel Universe.
      </p>
      {isLoading && <p className="text-center mt-4">Loading comics...</p>}
      {error && (
        <p className="text-center mt-4 text-red-500">
          An error occurred while fetching comics: {error.message}
        </p>
      )}
      {comics && (
        <List items={comics}>{(comic) => <ComicCard comic={comic} />}</List>
      )}
    </div>
  );
};

export default ComicsPage;
