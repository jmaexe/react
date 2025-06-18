import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="">
      <h1 className="text-4xl font-bold text-center mt-10">
        Welcome to the Marvel Universe
      </h1>
      <p className="text-center mt-4">
        Explore your favorite characters, comics, and more!
      </p>
      <div className="flex justify-center mt-8">
        <Link to="/characters" className="btn btn-primary">
          View Characters
        </Link>
        <Link to="/comics" className="btn btn-secondary ml-4">
          View Comics
        </Link>
      </div>
    </div>
  );
};

export default Home;
