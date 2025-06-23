import { useState } from "react";
import BotScene from "./BotScene";
import PvPScene from "./PvPScene";

const Home = () => {
  const [showPvPScene, setShowPvPScene] = useState(false);
  const [showBotScene, setShowBotScene] = useState(false);
  const [showBotButton, setShowBotButton] = useState(true);
  const [showPvPButton, setShowPvPButton] = useState(true);
  const [showBackButton, setShowBackButton] = useState(false);

  return (
    <div className="app">
      {showBotButton && (
        <button
          className="bot-button"
          onClick={() => {
            setShowBotScene(!showBotScene);
            setShowBotButton(false);
            setShowPvPButton(false);
            setShowBackButton(true);

          }}
        >  
          1 VS Bot
        </button>
      )}
      {showPvPButton && (
        <button
          className="pvp-button"
          onClick={() => {
            setShowPvPScene(!showPvPScene);
            setShowPvPButton(false);
            setShowBotButton(false);
            setShowBackButton(true);
          }}
        >  
          1 VS 1
        </button>
      )}
      {showBackButton && (
        <button
          className="back-button"
          onClick={() => {
            setShowBotScene(showBotButton);
            setShowPvPScene(showPvPButton);
            setShowBotButton(true);
            setShowPvPButton(true);
            setShowBackButton(false);
          }}
        >
          Indietro
        </button>
      )}
      {showPvPScene && <PvPScene />}
      {showBotScene && <BotScene />}
    </div>
  );
};

export default Home;
