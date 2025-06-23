import Home from "./components/Home";
import background from "./assets/images/foto-4.jpg";

const App = () => {
  return ( 
    <div 
      className="my-background"
      style={{ 
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        minHeight: '100vh',
        width: '100vw',
      }}
    >
        <Home />
    </div>
  );
};

export default App;
