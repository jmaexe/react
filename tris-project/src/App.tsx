import { useState } from "react";
import GameBoard from "./components/GameBoard";

const App = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [inGame, setInGame] = useState(false);
  const enterInGame = () => {
    if (name.trim() === "") {
      alert("errore");
      return;
    } else {
      if (room.trim() === "") {
        console.log("stanza casuale");
        setRoom(Math.random().toString(36).substring(2, 8));
      }
      setInGame(true);
    }
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
        <GameBoard roomName={room} />
      )}
    </div>
  );
};

export default App;
