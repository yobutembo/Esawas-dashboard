import { Link } from "react-router-dom";
import { IoPersonSharp } from "react-icons/io5";

const Header = () => {
  const userInfo = localStorage.getItem("userInfo");
  return (
    <header className="bg-blue-600 text-white">
      <nav className="flex px-0 justify-around md:justify-between md:px-6 py-2">
        <div>
          <Link to="/">
            <p className="text-xl  font-bold">Esawas</p>
          </Link>
        </div>
        <div>
          <Link to="/login" className="flex items-center space-x-1 px-2 py-1 ">
            <IoPersonSharp />
            {userInfo ? "Logout" : "Login"}
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
