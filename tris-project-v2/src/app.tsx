import type { ReactNode } from "react";
import background from "./assets/images/foto-4.jpg";

type AppProps = {
  children: ReactNode;
};

const App = ({ children }: AppProps) => {
  return ( 
    <div 
      className="my-background"
      style={{ 
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundAttachment: "fixed",
        overflow: "hidden",
        height: '97.7vh',
        width: '99.4vw',
        margin: 0,
        padding: 0,
      }}
    >
      {children}
    </div>
  );
};

export default App;