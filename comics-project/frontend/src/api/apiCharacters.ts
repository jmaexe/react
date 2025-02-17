import { AxiosResponse } from 'axios';
import { Character } from '../models/Character';
import { CharacterFilters } from '../models/Characters';
import { api } from './axios';

export const fetchCharacters = async (
  filters?: CharacterFilters
): Promise<Character[]> => {
  console.log('filters', filters);
  const response: AxiosResponse = await api.get('/characters', {
    params: filters,
  });
  let { data } = response;
  console.log(filters, data);
  if (data.results) {
    return data.results as Character[];
  }
  return data as Character[];
};
export const fetchCharacter = async (id: number): Promise<Character> => {
  const response: AxiosResponse = await api.get(`characters/${id}`);
  const { data } = response;
  console.log(data);
  return data as Character;
};
