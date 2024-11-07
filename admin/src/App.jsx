import React from "react";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <h1 className="text-navy-blue text-2xl">Heloo</h1>
        <Outlet />
      </main>
    </>
  );
};

export default App;
