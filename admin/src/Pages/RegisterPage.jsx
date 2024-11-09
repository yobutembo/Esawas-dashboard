import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { BASE_URL } from "../constants";

const RegisterPage = () => {
  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setRegisterData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const navigate = useNavigate();
  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${BASE_URL}/users`, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(registerData),
      });

      const user = await response.json();
      if (user) {
        localStorage.setItem("userInfo", JSON.stringify(user));
        navigate("/dashboard");
      } else {
        alert("Error occured");
      }
    } catch (error) {
      console.log(error?.data?.message);
    }
  };
  return (
    <div className="flex items-center justify-center mt-8 bg-white">
      <div className="bg-white p-8 shadow-lg w-full max-w-md">
        <div className="flex justify-center mb-6">
          <FaUserCircle className="text-6xl text-blue" />
        </div>
        <h2 className="text-2xl font-semibold text-center text-navy-blue mb-4">
          Sign Up
        </h2>
        <form onSubmit={handleRegister}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-light-dark-blue mb-1">
              Name
            </label>
            <input
              type="name"
              id="name"
              name="name"
              className="w-full px-4 py-2 border border-light-blue rounded focus:outline-none focus:ring-2 focus:ring-blue"
              placeholder="Enter your name"
              value={registerData.name}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-light-dark-blue mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-2 border border-light-blue rounded focus:outline-none focus:ring-2 focus:ring-blue"
              placeholder="Enter your email"
              value={registerData.email}
              onChange={handleChange}
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-light-dark-blue mb-1"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full px-4 py-2 border border-light-blue rounded focus:outline-none focus:ring-2 focus:ring-blue"
              placeholder="Enter your password"
              value={registerData.password}
              onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue text-white py-2 rounded-lg hover:bg-light-blue transition duration-200"
          >
            Continue
          </button>
        </form>
        <p className="mt-2">
          Have an account?
          <Link to="/login" className="text-blue">
            {" "}
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
