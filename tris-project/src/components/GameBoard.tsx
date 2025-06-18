import { useEffect, useState } from "react";

function GameBoard() {
  const [ws, setWs] = useState<WebSocket | null>(null);
  const [board, setBoard] = useState(Array(9).fill(""));
  const [symbol, setSymbol] = useState(null);
  const [turn, setTurn] = useState("X");
  const [winner, setWinner] = useState(null);

  useEffect(() => {
    const protocol = window.location.protocol === "https:" ? "wss" : "ws";
    const host = window.location.hostname;

    const socket = new WebSocket(`${protocol}://${host}:8000/ws/tris/`);

    socket.onopen = () => console.log("Connected");
    socket.onclose = () => console.log("Disconnected");

    socket.onmessage = (e) => {
      const data = JSON.parse(e.data);

      if (data.type === "init") {
        setSymbol(data.symbol);
      } else if (data.type === "update") {
        setBoard(data.board);
        setTurn(data.turn);
        setWinner(data.winner);
      } else if (data.type === "reset") {
        setBoard(Array(9).fill(""));
        setTurn("X");
        setWinner(null);
      } else if (data.type === "full") {
        alert("Game is full! Try again later.");
        socket.close();
      }
    };

    setWs(socket);

    return () => socket.close();
  }, []);

  const makeMove = (index: number) => {
    if (!ws || ws.readyState !== WebSocket.OPEN) return;
    if (winner || turn !== symbol || board[index] !== "") return;

    ws.send(JSON.stringify({ type: "move", index }));
  };

  return (
    <div>
      <h2>Tris Multiplayer</h2>
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
              cursor:
                cell === "" && !winner && turn === symbol
                  ? "pointer"
                  : "not-allowed",
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
    </div>
  );
}

export default GameBoard;
