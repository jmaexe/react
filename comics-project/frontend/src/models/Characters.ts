import { api } from "../api/axios.ts";
import { Comic } from "./Comics.ts";
export interface CharacterFilters {
  limit: number;
  name: string;
  comics?: number;
  events?: string;
  series?: string;
  stories?: string;
}

export const fetchEvents = async (): Promise<Comic[]> => {
  const response = await api.get(`${import.meta.env.VITE_base_url}/events`);
  console.log(response, response.data);

  return response.data;
};
export const fetchSeries = async (): Promise<any> => {
  const response = await api.get("/series");
  console.log(response.data);
  return response.data;
};
export const fetchStories = async (): Promise<any> => {
  const response = await api.get("/stories");
  console.log(response.data);
  return response.data;
};
