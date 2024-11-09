import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-300 to-green-300">
      <header className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-500">
          Welcome to Esawas
        </h1>
        <p className="mt-4 text-lg md:text-xl text-blue-400 max-w-md mx-auto">
          Begin your journey to impactful data collection. Login to start your
          assessment!
        </p>
      </header>
      <div className="mt-10">
        <img
          src={logo}
          alt="Esawas Illustration"
          className="w-full max-w-md mx-auto shadow-lg rounded-lg"
        />
      </div>
      <Link to="/login">
        <button className="mt-10 px-8 py-3 bg-green-400 text-white rounded-lg font-semibold hover:bg-green-300 transition duration-300">
          Get Started
        </button>
      </Link>
      <footer className="mt-12 text-center text-blue-300">
        <p>&copy; {new Date().getFullYear()} Esawas. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
