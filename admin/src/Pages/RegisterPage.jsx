import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  return (
    <div className="flex items-center justify-center mt-8 bg-white">
      <div className="bg-white p-8 shadow-lg w-full max-w-md">
        <div className="flex justify-center mb-6">
          <FaUserCircle className="text-6xl text-blue" />
        </div>
        <h2 className="text-2xl font-semibold text-center text-navy-blue mb-4">
          Sign Up
        </h2>
        <form>
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
