import { Alert, Box, Button, Grid, Stack, Typography } from "@mui/material";
import {
  createFileRoute,
  Link,
  Link as RouterLink,
} from "@tanstack/react-router";
import { useCallback, useEffect, useMemo, useState } from "react";
import ReactConfetti from "react-confetti";
import Confetti from "../components/Confetti";
import useBotMove from "../hooks/useBotMove";

export const Route = createFileRoute("/PvBot")({
  component: RouteComponent,
});

function RouteComponent() {
  const [playerSymbol, setPlayerSymbol] = useState<"X" | "O" | null>(null);
  const [board, setBoard] = useState<string[]>(Array(9).fill(""));
  const [turn, setTurn] = useState<"X" | "O">("X");
  const [winner, setWinner] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!playerSymbol) return;

    setBoard(Array(9).fill(""));
    setWinner(null);
    setError(null);
    setTurn("X"); // "X" inizia sempre
  }, [playerSymbol]);

  const botSymbol = useMemo(() => {
    if (!playerSymbol) return null;
    return playerSymbol === "X" ? "O" : "X";
  }, [playerSymbol]);

  const onBotMove = useCallback(
    (newBoard: string[], nextTurn: "X" | "O", winner: string | null) => {
      setBoard(newBoard);
      setTurn(nextTurn);
      setWinner(winner);
      setLoading(false);
      setError(null);
    },
    []
  );

  const onError = useCallback((message: string) => {
    setError(message);
    setLoading(false);
  }, []);

  useBotMove({
    board,
    botSymbol,
    turn,
    winner,
    onBotMove,
    onError,
    difficulty: "easy",
  });

  const makeMove = (index: number) => {
    if (
      !playerSymbol ||
      winner ||
      board[index] !== "" ||
      turn !== playerSymbol ||
      loading
    )
      return;

    const newBoard = [...board];
    newBoard[index] = playerSymbol;
    setBoard(newBoard);
    if (botSymbol) {
      setTurn(botSymbol);
    }
    setWinner(null);
    setLoading(true);
    setError(null);
  };

  const handleChoose = (choice: "X" | "O" | "random") => {
    const chosen =
      choice === "random" ? (Math.random() < 0.5 ? "X" : "O") : choice;
    setPlayerSymbol(chosen);
  };

  const resetGame = () => {
    setPlayerSymbol(null);
    setBoard(Array(9).fill(""));
    setTurn("X");
    setWinner(null);
    setError(null);
    setLoading(false);
  };

  if (!playerSymbol) {
    return (
      <Box textAlign="center" mt={4}>
        <Typography variant="h5" gutterBottom>
          Scegli il tuo simbolo
        </Typography>
        <Stack spacing={2} direction="column" alignItems="center">
          <Button variant="contained" onClick={() => handleChoose("X")}>
            X
          </Button>
          <Button variant="contained" onClick={() => handleChoose("O")}>
            O
          </Button>
          <Button variant="contained" onClick={() => handleChoose("random")}>
            Casuale
          </Button>
          <Button variant="outlined" component={RouterLink} to="..">
            Torna indietro
          </Button>
        </Stack>
      </Box>
    );
  }

  return (
    <Box textAlign="center" mt={4}>
      <Typography variant="h5" gutterBottom>
        Tu sei: <strong>{playerSymbol}</strong> — Turno di:{" "}
        <strong>{turn}</strong>
      </Typography>

      {error && (
        <Alert severity="error" sx={{ mt: 2, mb: 2 }}>
          {error}
        </Alert>
      )}

      <Grid
        container
        spacing={1}
        justifyContent="center"
        sx={{ maxWidth: 320, margin: "auto", mt: 2, mb: 3 }}
      >
        {board.map((cell, idx) => {
          const disabled =
            cell !== "" || winner !== null || turn !== playerSymbol || loading;

          return (
            <Grid size={"auto"}>
              <Button
                variant="outlined"
                onClick={() => makeMove(idx)}
                disabled={disabled}
                sx={{
                  width: 100,
                  height: 100,
                  fontSize: 32,
                  backgroundColor: cell === "" ? "#fff" : "#ddd",
                  cursor: disabled ? "not-allowed" : "pointer",
                  opacity: disabled ? 0.6 : 1,
                  border: "2px solid #000",
                }}
              >
                {cell}
              </Button>
            </Grid>
          );
        })}
      </Grid>

      {winner && (
        <Typography variant="h6" sx={{ mb: 2 }}>
          {winner === "draw"
            ? "Pareggio!"
            : winner === playerSymbol
              ? "Hai vinto!"
              : "Hai perso!"}
        </Typography>
      )}
      {winner && winner === playerSymbol && <Confetti />}

      {loading && <Typography>Bot sta giocando...</Typography>}

      <Button variant="contained" onClick={resetGame} sx={{ mt: 2 }}>
        Reset partita
      </Button>
    </Box>
  );
}
