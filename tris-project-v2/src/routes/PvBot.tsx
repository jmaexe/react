import { Box, Button, Paper, Stack, Typography } from "@mui/material";
import { createFileRoute, Link } from "@tanstack/react-router";
import { AnimatePresence } from "motion/react";
import { useCallback, useEffect, useMemo, useState } from "react";
import BotBoard from "../components/BotBoard";
import BotSettingsPicker from "../components/BotSettingsPicker";
import Confetti from "../components/Confetti";
import Error from "../components/Error";
import Modal from "../components/Modal";
import useBotMove from "../hooks/useBotMove";

export const Route = createFileRoute("/PvBot")({
  component: RouteComponent,
});

function RouteComponent() {
  const [playerSymbol, setPlayerSymbol] = useState<"X" | "O" | null>(null);
  const [difficulty, setDifficulty] = useState<"easy" | "medium" | "hard">(
    "easy"
  );

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
    difficulty,
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

  const handleStart = (
    chosenSymbol: "X" | "O",
    diff: "easy" | "medium" | "hard"
  ) => {
    setPlayerSymbol(chosenSymbol);
    setDifficulty(diff);
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
    return <BotSettingsPicker onConfirm={handleStart} />;
  }

  return (
    <Box textAlign="center" mt={4}>
      <Typography
        variant="h4"
        gutterBottom
        sx={{ fontWeight: 700, color: "primary.main" }}
      >
        Tu sei: <strong>{playerSymbol}</strong> — Turno di:{" "}
        <strong>{turn}</strong>
      </Typography>

      {error && <Error error={error} />}

      <BotBoard
        board={board}
        playerSymbol={playerSymbol}
        winner={winner}
        turn={turn}
        loading={loading}
        makeMove={makeMove}
      />
      <Button variant="contained" color="primary" component={Link} to={".."}>
        {" "}
        Indietro
      </Button>

      <AnimatePresence>
        {winner && (
          <>
            <Modal>
              <Paper sx={{ maxWidth: "30rem" }}>
                <Typography variant="h4" gutterBottom>
                  {winner === "draw"
                    ? "Pareggio!"
                    : winner !== botSymbol
                      ? "Hai vinto!"
                      : "Hai perso!"}
                </Typography>
                <Stack
                  direction="row"
                  spacing={2}
                  sx={{
                    width: "100%",
                    mt: 2,
                  }}
                >
                  <Button
                    component={Link}
                    variant="contained"
                    color="primary"
                    to="/"
                    fullWidth
                  >
                    Home
                  </Button>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={resetGame}
                    sx={{ mt: 2, textTransform: "none" }}
                    fullWidth
                  >
                    Reset partita
                  </Button>
                </Stack>
              </Paper>
            </Modal>
            {winner !== botSymbol && winner !== "draw" && <Confetti />}
          </>
        )}
      </AnimatePresence>
    </Box>
  );
}
