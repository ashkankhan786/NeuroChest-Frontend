import React from "react";
import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import Result from "./pages/Result";

function App() {
  return (
    <div className="box-border min-h-screen w-screen bg-gradient-to-br from-[#0f3d3e] to-[#000000] text-white">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </div>
  );
}

export default App;
