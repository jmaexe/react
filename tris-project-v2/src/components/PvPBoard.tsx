import { Button, CircularProgress, Typography } from "@mui/material";
import { Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import Confetti from "./Confetti";
import Loading from "./Loading";
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
      <div>
        <Typography variant="h2">Attendi il giocatore 2 </Typography>
        <Loading />
      </div>
    );
  }
  return (
    <AnimatePresence initial={false}>
      {isFull ? (
        <Modal>
          <h2>Stanza piena</h2>
          <p>La stanza {roomName} è piena. Riprova più tardi.</p>
          <Button
            component={Link}
            variant="contained"
            className="home-button"
            to=".."
          >
            Chiudi
          </Button>
        </Modal>
      ) : (
        <div>
          <h2> Stanza: {roomName}</h2>
          <p>
            Tu sei: <b>{symbol}</b> - Turno di: <b>{turn}</b>
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 100px)",
              gap: "5px",
            }}
          >
            {board.map((cell, i) => (
              <button
                key={i}
                onClick={() => makeMove(i)}
                style={{
                  width: 100,
                  height: 100,
                  fontSize: 32,
                  backgroundColor: cell === "" ? "#fff" : "#ddd",
                  opacity: cell === "" && !winner && turn === symbol ? 1 : 0.6,
                  cursor:
                    cell === "" && !winner && turn === symbol
                      ? "pointer"
                      : "not-allowed",
                  border: "2px solid #000",
                }}
                disabled={cell !== "" || winner !== null || turn !== symbol}
              >
                {cell}
              </button>
            ))}
          </div>
          {winner && (
            <h3>
              {winner === "draw"
                ? "Pareggio!"
                : winner === symbol
                  ? "Hai vinto!"
                  : "Hai perso!"}
            </h3>
          )}
          {winner && winner === symbol && <Confetti />}
        </div>
      )}
    </AnimatePresence>
  );
}

export default PvPBoard;
