import { fetchCharacter } from '../api/apiCharacters';
export const useFetchCharacter = async (id: number) => {
  const character = await fetchCharacter(id);
  return character;
};
