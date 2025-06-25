import {
  Box,
  Button,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import { Link } from "@tanstack/react-router";
import { useState } from "react";

type BotSettingsPickerProps = {
  onConfirm: (
    symbol: "X" | "O",
    difficulty: "easy" | "medium" | "hard"
  ) => void;
};
const BotSettingsPicker = ({ onConfirm }: BotSettingsPickerProps) => {
  const [symbol, setSymbol] = useState<"X" | "O" | "random" | null>(null);
  const [difficulty, setDifficulty] = useState<"easy" | "medium" | "hard">(
    "easy"
  );

  const handleConfirm = () => {
    const chosenSymbol =
      symbol === "random" ? (Math.random() < 0.5 ? "X" : "O") : symbol || "X";
    onConfirm(chosenSymbol, difficulty);
  };

  return (
    <Box textAlign="center" mt={4}>
      <Typography variant="h6" gutterBottom>
        Scegli il tuo simbolo
      </Typography>
      <Stack spacing={2} direction="column" alignItems="center">
        <ToggleButtonGroup
          value={symbol}
          exclusive
          onChange={(_, value) => setSymbol(value)}
          color="primary"
          sx={{ '& .MuiToggleButton-root': { padding: '0.5em 1em' } }}
        >
          <ToggleButton value="X">X</ToggleButton>
          <ToggleButton value="O">O</ToggleButton>
          <ToggleButton value="random">Casuale</ToggleButton>
        </ToggleButtonGroup>

        <Typography variant="h6" mt={4}>
          Difficoltà
        </Typography>
        <ToggleButtonGroup
          value={difficulty}
          exclusive
          onChange={(_, value) => {
            if (value) setDifficulty(value);
          }}
          color="secondary"
        >
          <ToggleButton value="easy">Facile</ToggleButton>
          <ToggleButton value="medium">Media</ToggleButton>
          <ToggleButton value="hard">Difficile</ToggleButton>
        </ToggleButtonGroup>

        <Button
          variant="contained"
          onClick={handleConfirm}
          disabled={!symbol}
          sx={{ mt: 3 }}
        >
          Inizia
        </Button>

        <Button variant="outlined" component={Link} to=".." color="secondary">
          Torna indietro
        </Button>
      </Stack>
    </Box>
  );
};

export default BotSettingsPicker;
