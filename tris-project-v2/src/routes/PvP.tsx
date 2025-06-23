import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/PvP")({
  component: RouteComponent,
});

function RouteComponent() {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [inGame, setInGame] = useState(false);
  const enterInGame = () => {
    setRoom(room.trim());
    setInGame(true);
  };
  return (
    <div>
      {!inGame ? (
        <div>
          <h2>inserisci il nome</h2>
          <input
            type="text"
            placeholder="nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="nome stanza"
            value={room}
            onChange={(e) => setRoom(e.target.value)}
          />
          <button onClick={enterInGame}>Entra</button>
        </div>
      ) : (
        "pop"//<PvPBoard roomName={room} name={name} />
      )}
    </div>
  );
}
