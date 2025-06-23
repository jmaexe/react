import React, { use, useCallback, useEffect, useMemo, useState } from "react";
import useBotMove from "../hooks/useBotMove";

const BotScene: React.FC = () => {
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
    if (choice === "random") {
      const randomSymbol = Math.random() < 0.5 ? "X" : "O";
      setPlayerSymbol(randomSymbol);
    } else {
      setPlayerSymbol(choice);
    }
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
      <section>
        <h2>Scegli il tuo simbolo</h2>
        <button className="choose-btn1" onClick={() => handleChoose("X")}>X</button>
        <button className="choose-btn2" onClick={() => handleChoose("O")}>O</button>
        <button className="choose-btn3" onClick={() => handleChoose("random")}>Casuale</button>
      </section>
    );
  }

  return (
    <section>
      <h2>
        Tu sei: <strong>{playerSymbol}</strong> — Turno di:{" "}
        <strong>{turn}</strong>
      </h2>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 100px)",
          gap: "10px",
          marginBottom: "1rem",
        }}
      >
        {board.map((cell, idx) => (
          <button
            key={idx}
            onClick={() => makeMove(idx)}
            disabled={
              cell !== "" || winner !== null || turn !== playerSymbol || loading
            }
            style={{
              width: 100,
              height: 100,
              fontSize: 32,
              backgroundColor: cell === "" ? "#fff" : "#ddd",
              cursor:
                cell === "" && !winner && turn === playerSymbol && !loading
                  ? "pointer"
                  : "not-allowed",
              opacity:
                cell === "" && !winner && turn === playerSymbol && !loading
                  ? 1
                  : 0.6,
              border: "2px solid #000",
            }}
          >
            {cell}
          </button>
        ))}
      </div>

      {winner && (
        <h3>
          {winner === "draw"
            ? "Pareggio!"
            : winner === playerSymbol
            ? "Hai vinto!"
            : "Hai perso!"}
        </h3>
      )}

      {loading && <p>Bot sta giocando...</p>}

      <button onClick={resetGame} style={{ marginTop: "1rem" }}>
        Reset partita
      </button>
    </section>
  );
};

export default BotScene;
