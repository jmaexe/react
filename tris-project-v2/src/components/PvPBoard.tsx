import {
  Box,
  Button,
  CircularProgress,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import { Link } from "@tanstack/react-router";
import { AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";
import Confetti from "./Confetti";
import Modal from "./Modal";
type PvPBoardProps = {
  roomName: string;
  name: string;
};
function PvPBoard({ roomName, name }: PvPBoardProps) {
  const [ws, setWs] = useState<WebSocket | null>(null);
  const [board, setBoard] = useState(Array(9).fill(""));
  const [symbol, setSymbol] = useState<string | null>(null);
  const [turn, setTurn] = useState("X");
  const [winner, setWinner] = useState<string | null>(null);
  const [isFull, setIsFull] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    const protocol = window.location.protocol === "https:" ? "wss" : "ws";
    const host = window.location.hostname;

    const socket = new WebSocket(
      roomName
        ? `${protocol}://192.168.17.28:8000/ws/tris/${roomName}/`
        : `${protocol}://192.168.17.28:8000/ws/tris/`
    );

    socket.onopen = () => {
      console.log(`Connesso alla stanza ${roomName}`);
    };
    socket.onclose = () => console.log("Disconnesso");

    socket.onmessage = (e) => {
      const data = JSON.parse(e.data);
      console.log(JSON.stringify(data));
      switch (data.type) {
        case "init":
          setSymbol(data.symbol);
          socket.send(JSON.stringify({ type: "init", player_name: name }));
          if (data.symbol === "X") {
            setLoading(true);
          }
          setIsConnected(true);
          break;
        case "update":
          setBoard(data.board);
          setTurn(data.turn);
          setWinner(data.winner);
          break;
        case "ready":
          setLoading(false);
          break;
        case "reset":
          setBoard(Array(9).fill(""));
          setTurn("X");
          setWinner(null);
          break;
        case "full":
          setIsFull(true);
          socket.close();
          break;
      }
    };

    setWs(socket);

    return () => {
      socket.close();
      setWs(null);
      setBoard(Array(9).fill(""));
      setSymbol(null);
      setTurn("X");
      setWinner(null);
    };
  }, [roomName, name]);

  const makeMove = (index: number) => {
    if (!ws || ws.readyState !== WebSocket.OPEN) return;
    if (winner || turn !== symbol || board[index] !== "") return;

    ws.send(JSON.stringify({ type: "move", index }));
  };

  if (loading) {
    return (
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          textAlign: "center",
          gap: 2,
        }}
      >
        <Typography variant="h2">Attendi il giocatore 2 </Typography>
        <CircularProgress size={45} />
        <Button variant="contained" color="secondary" component={Link} to="..">
          Indietro
        </Button>
      </Box>
    );
  }
  return (
    <AnimatePresence initial={false}>
      {isFull ? (
        <Modal>
          <Paper>
            <Typography variant="h4" gutterBottom>
              Stanza piena
            </Typography>
            <Typography sx={{ mb: 2 }} color="main.primary">
              La stanza {roomName} è piena. Riprova più tardi.
            </Typography>
            <Button component={Link} variant="contained" to="/">
              Chiudi
            </Button>
          </Paper>
        </Modal>
      ) : (
        <Box textAlign="center" mt={4}>
          <Typography variant="h4" gutterBottom>
            Stanza: {roomName}
          </Typography>
          <Typography variant="h6" sx={{ mb: 2, textShadow: `
          -1px -1px 0 white,
          1px -1px 0 white,
          -1px  1px 0 white,
          1px  1px 0 white
          2px 2px 4px rgba(0, 0, 0, 0.0.5);
      `  }}>
            Tu sei: <strong>{symbol}</strong> — Turno di:{" "}
            <strong>{turn}</strong>
          </Typography>

          <Grid
            container
            spacing={1}
            justifyContent="center"
            sx={{ maxWidth: 320, margin: "auto", mb: 3 }}
          >
            {board.map((cell, i) => {
              const disabled =
                cell !== "" || winner !== null || turn !== symbol;
              return (
                <Grid>
                  <Button
                    variant="outlined"
                    onClick={() => makeMove(i)}
                    disabled={disabled}
                    sx={{
                      width: 100,
                      height: 100,
                      fontSize: 32,
                      fontWeight: "bold",
                      backgroundColor: cell === "" ? "#FFB805" : "#f5f5f5",
                      color: "#920017",
                      border: "4px solid #920017",
                      boxShadow: `
                        2px 2px 0 #fdad00,
                        4px 4px 0 #920017
                      `,
                      textShadow: cell
                        ? `
                          1px 1px 0 #920017,
                          2px 2px 0 #fdad00
                        `
                        : "none",
                      transition: "all 0.15s ease-in-out",
                      cursor: disabled ? "not-allowed" : "pointer",
                      opacity: disabled ? 0.6 : 1,
                      "&:hover": {
                        backgroundColor: disabled ? undefined : "#FFD300",
                      },
                    }}
                  >
                    {cell}
                  </Button>
                </Grid>
              );
            })}
          </Grid>

          <AnimatePresence>
            {winner && (
              <>
                <Modal>
                  <Paper sx={{ maxWidth: "30rem" }}>
                    <Typography variant="h4" gutterBottom>
                      {winner === "draw"
                        ? "Pareggio!"
                        : winner === symbol
                          ? "Hai vinto!"
                          : "Hai perso!"}
                    </Typography>

                    <Button component={Link} variant="contained" to="/">
                      Home
                    </Button>
                  </Paper>
                </Modal>
                {winner === symbol && <Confetti />}
              </>
            )}
          </AnimatePresence>
        </Box>
      )}
    </AnimatePresence>
  );
}

export default PvPBoard;
