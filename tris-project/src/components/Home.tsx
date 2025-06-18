import { useState } from "react";
import BotScene from "./BotScene";
import PvPScene from "./PvPScene";

const Home = () => {
  const [showPvPScene, setShowPvPScene] = useState(false);
  const [showBotScene, setShowBotScene] = useState(false);
  return (
    <>
      <button onClick={() => setShowBotScene(!showBotScene)}>1 v bot</button>
      <button onClick={() => setShowPvPScene(!showPvPScene)}> 1 v 1</button>
      {showPvPScene && <PvPScene />}
      {showBotScene && <BotScene />}
    </>
  );
};

export default Home;
