import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="w-full h-full flex flex-col relative">
      <Navbar />
      <Hero />
      <Footer />
    </div>
  );
}

export default Home;
