// import DynamicTable from '../components/DynamicTable'
import logo from "../assets/logo.png";

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-100 to-blue-300">
      <header className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-700">
          Welcome to Esawas
        </h1>
        <p className="mt-4 text-lg md:text-xl text-blue-800 max-w-md mx-auto">
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

      <button
        className="mt-10 px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
        onClick={() => (window.location.href = "/login")} // login page route
      >
        Get Started
      </button>

      <footer className="mt-12 text-center text-blue-800">
        <p>&copy; {new Date().getFullYear()} Esawas. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
