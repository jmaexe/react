import { useState } from 'react';
import CharactersList from '../components/CharactersList';
import CharacterListFilters from '../components/CharacterListFilters';
import { CharacterFilters } from '../models/Characters';
import { useQuery } from '@tanstack/react-query';
import Error from '../components/Error';
import Loading from '../components/Loading';
import { fetchCharacters } from '../api/apiCharacters';

const CharactersPage = () => {
  const [limit, setLimit] = useState<CharacterFilters['limit']>(10);
  const [name, setName] = useState<CharacterFilters['name']>('');
  const [comics, setComics] = useState<CharacterFilters['comics']>(0);
  console.log(limit, name, comics);
  const { data, isFetching, error } = useQuery({
    queryKey: ['characters', { limit, name, comics }],
    queryFn: () => fetchCharacters({ limit, name, comics }),
    refetchOnWindowFocus: false,
    refetchInterval: false,
    refetchIntervalInBackground: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
  });

  return (
    <div className="flex items-center justify-center flex-col w-full h-fit ">
      <h2 className="font-bold text-3xl text-primary my-6">Characters Page</h2>
      <CharacterListFilters
        onChange={(filters: CharacterFilters) => {
          setLimit(filters.limit);
          setName(filters.name);
          setComics(filters.comics);
        }}
      />
      {error && <Error error={error} />}
      {data && <CharactersList characters={data} />}
      {isFetching && <Loading />}
    </div>
  );
};

export default CharactersPage;
