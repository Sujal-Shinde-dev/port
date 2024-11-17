import React, { useState } from "react";

function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <nav className={`fixed top-0 w-full ${isDarkMode ? "bg-gray-800" : "bg-white"} shadow`}>
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <h1 className={`text-2xl font-bold ${isDarkMode ? "text-white" : "text-gray-800"}`}>
          Portfolio
        </h1>
        <div className="flex items-center space-x-6">
          <a href="#home" className={`hover:underline ${isDarkMode ? "text-white" : "text-gray-800"}`}>
            Home
          </a>
          <a href="#about" className={`hover:underline ${isDarkMode ? "text-white" : "text-gray-800"}`}>
            About
          </a>
          <a href="#projects" className={`hover:underline ${isDarkMode ? "text-white" : "text-gray-800"}`}>
            Projects
          </a>
          <a href="#contact" className={`hover:underline ${isDarkMode ? "text-white" : "text-gray-800"}`}>
            Contact
          </a>
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="bg-blue-500 text-white px-3 py-1 rounded"
          >
            {isDarkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
