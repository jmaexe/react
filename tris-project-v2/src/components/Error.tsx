import { Alert } from "@mui/material";
type ErrorProps = {
  error: string | null;
};
const Error = ({ error }: ErrorProps) => {
  return (
    <Alert severity="error" sx={{ mt: 2, mb: 2 }}>
      {error ?? "Errore"}
    </Alert>
  );
};

export default Error;
