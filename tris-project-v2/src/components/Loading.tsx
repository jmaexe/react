import { CircularProgress } from "@mui/material";
type LoadingProps = {
  size: string | number;
};
const Loading = ({ size }: LoadingProps) => {
  return (
    <>
      Carimento in corso... <CircularProgress size={size} sx={{ color: "" }} />
    </>
  );
};

export default Loading;
