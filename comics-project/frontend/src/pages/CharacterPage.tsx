import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "react-router-dom";
import { fetchCharacter } from "../api/apiCharacters";
import Error from "../components/Error";
import Loading from "../components/Loading";

const CharacterPage = () => {
  const { id } = useParams();
  const ciao = "ciao";
  //   const character = id !== undefined ? await useFetchCharacter(+id) : undefined;
  const {
    data: character,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["characters", id],
    queryFn: () => (id !== undefined ? fetchCharacter(+id) : undefined),
    refetchOnWindowFocus: false,
    refetchInterval: false,
    refetchIntervalInBackground: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
  });
  return (
    <>
      {isLoading && <Loading />}
      {error && <Error error={error} />}
      {character && (
        <div className="container card card-side bg-base-100 shadow-2xl m-4 ">
          <figure className="max-w-2xl">
            <img
              src={
                character.thumbnail?.path + "." + character.thumbnail?.extension
              }
              alt={`${character.name} image`}
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-primary font-bold text-2xl">
              {character.name}
            </h2>
            {character.description && <p>{character.description}</p>}
            {Object.entries(character).map(([key, value]) => {
              return (
                ![
                  "thumbnail",
                  "urls",
                  "events",
                  "series",
                  "stories",
                  "comics",
                  "resourceURI",
                  "modified",
                  "id",
                  "name",
                  "description",
                ].includes(key) && (
                  <p>
                    {key} : {value}
                  </p>
                )
              );
            })}
            <div className="card-actions justify-end">
              <Link to="/characters" className="btn btn-primary">
                Return to Characters Page
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CharacterPage;
