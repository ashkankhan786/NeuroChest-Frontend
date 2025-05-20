import React from "react";
import { Stethoscope } from "lucide-react";
import { NavLink, useNavigate } from "react-router";
function Navbar() {
  const navigate = useNavigate();
  return (
    <div className="fixed w-full bg-transparent backdrop-blur-sm flex justify-between items-center p-4 shadow-md border-b-neutral-600">
      <div
        className="w-full flex items-center justify-start gap-2 cursor-pointer"
        onClick={() => navigate("/")}
      >
        <Stethoscope className="text-xl" />
        <h1 className="text-xl font-bold">NeuroChest</h1>
      </div>
      <div className="w-full flex items-center justify-start">
        <ul className="flex items-center gap-16 list-none">
          <NavLink
            to="/"
            className="font-semibold text-white hover:text-gray-300 cursor-pointer"
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className=" font-semibold text-white hover:text-gray-300 cursor-pointer"
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className="font-semibold text-white hover:text-gray-300 cursor-pointer"
          >
            Contact
          </NavLink>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
