import { Box, Button, ButtonGroup, TextField, Typography } from "@mui/material";
import { Link } from "@tanstack/react-router";
type PvPFormProps = {
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  room: string;
  setRoom: React.Dispatch<React.SetStateAction<string>>;
  enterInGame: () => void;
};
const PvPForm = ({
  name,
  setName,
  room,
  setRoom,
  enterInGame,
}: PvPFormProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        width: "100%",
        margin: "0 auto",
        mt: 4,
      }}
    >
      <Typography variant="h6" textAlign="center">
        inserisci il nome
      </Typography>

      <TextField
        label="Nome"
        placeholder="nome"
        value={name}
        onChange={(e) => setName(e.target.value)}
        variant="outlined"
        fullWidth
        sx={{
          "& label": {
            color: "#920017",
          },
          "& label.Mui-focused": {
            color: "#fdad00",
          },
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "#920017",
            },
            "&:hover fieldset": {
              borderColor: "#920017",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#fdad00",
              borderWidth: 2,
            },
          },
        }}
      />

      <TextField
        label="Nome stanza"
        placeholder="nome stanza"
        value={room}
        onChange={(e) => setRoom(e.target.value)}
        variant="outlined"
        fullWidth
        sx={{
          "& label": {
            color: "#920017",
          },
          "& label.Mui-focused": {
            color: "#fdad00",
          },
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "#920017",
            },
            "&:hover fieldset": {
              borderColor: "#920017",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#fdad00",
              borderWidth: 2,
            },
          },
        }}
      />
      <ButtonGroup sx={{ gap: 1 }}>
        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={enterInGame}
          fullWidth
          disabled={name === ""}
        >
          Entra
        </Button>
        <Button
          variant="contained"
          color="secondary"
          size="large"
          component={Link}
          to="/"
          fullWidth
        >
          Indietro
        </Button>
      </ButtonGroup>
    </Box>
  );
};

export default PvPForm;
