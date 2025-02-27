export const getBackgroundImage = (id: string) => {
  return `${import.meta.env.VITE_IMAGE_URL}w1280${id}`;
};

export const getIconImage = (id: string) => {
  return `${import.meta.env.VITE_IMAGE_URL}original${id}`;
};

export const getPosterImage = (id: string) => {
  return `${import.meta.env.VITE_IMAGE_URL}w342${id}`;
};
