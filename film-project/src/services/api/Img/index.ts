type BackgroundSize = "w300" | "w780" | "w1280" | "original";
export const getBackgroundImage = (id: string, size: BackgroundSize) => {
  return `${import.meta.env.VITE_IMAGE_URL}${size}/${id}`;
};

type LogoSize = "w45" | "w92" | "w154" | "w185" | "w300" | "w500" | "original";
export const getLogoImage = (id: string, size: LogoSize) => {
  return `${import.meta.env.VITE_IMAGE_URL}${size}/${id}`;
};

type PosterSize =
  | "w92"
  | "w154"
  | "w185"
  | "w342"
  | "w500"
  | "w780"
  | "original";
export const getPosterImage = (id: string, size: PosterSize) => {
  return `${import.meta.env.VITE_IMAGE_URL}${size}/${id}`;
};
