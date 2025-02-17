import axios, { AxiosResponse } from 'axios';

export interface RootConfig {
  images: Images;
  change_keys: string[];
}

export interface Images {
  base_url: string;
  secure_base_url: string;
  backdrop_sizes: string[];
  logo_sizes: string[];
  poster_sizes: string[];
  profile_sizes: string[];
  still_sizes: string[];
}

export const getConfig = async () => {
  const response: AxiosResponse<RootConfig> = await axios.get(
    '../constants/config.json'
  );
  const { data } = response;
  return data;
};
