import { useEffect } from "react";

type BotMoveParams = {
  board: string[];
  botSymbol: "X" | "O" | null;
  turn: "X" | "O";
  winner: string | null;
  onBotMove: (
    newBoard: string[],
    nextTurn: "X" | "O",
    winner: string | null
  ) => void;
  onError: (errorMsg: string) => void;
};

export default function useBotMove({
  board,
  botSymbol,
  turn,
  winner,
  onBotMove,
  onError,
}: BotMoveParams) {
  useEffect(() => {
    console.log("useBotMove effect triggered", board, botSymbol, turn, winner);
    if (!botSymbol || turn !== botSymbol || winner) return;
    const playBotMove = async () => {
      try {
        const res = await fetch(`http://192.168.17.28:8000/play-bot/`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ board, bot_symbol: botSymbol }),
        });
        if (!res.ok) throw new Error("Server error");

        const data = await res.json();
        console.log("Bot response:", data);

        if (typeof data.index === "number") {
          const newBoard = [...board];
          newBoard[data.index] = botSymbol;
          onBotMove(
            newBoard,
            botSymbol === "X" ? "O" : "X",
            data.winner || null
          );
        } else {
          onError("Risposta bot non valida");
        }
      } catch (e) {
        console.log(e);
        onError("Errore di rete o server");
      }
    };

    playBotMove();
  }, [board, botSymbol, turn, winner, onBotMove, onError]);
}
