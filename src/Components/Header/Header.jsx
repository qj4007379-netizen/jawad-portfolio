import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  // Theme state for the header - synced with localStorage
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Get initial theme from localStorage or default to dark
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? JSON.parse(savedTheme) : true;
  });

  // Function to toggle between dark and light mode
  const toggleTheme = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    localStorage.setItem("theme", JSON.stringify(newTheme));

    // Dispatch custom event to notify other components
    window.dispatchEvent(new CustomEvent("themeChange", { detail: newTheme }));
  };

  // Listen for theme changes from other components
  useEffect(() => {
    const handleThemeChange = (event) => {
      setIsDarkMode(event.detail);
    };

    window.addEventListener("themeChange", handleThemeChange);
    return () => window.removeEventListener("themeChange", handleThemeChange);
  }, []);

  return (
    <header
      className={`shadow sticky z-50 top-0 transition-all duration-500 ${
        isDarkMode
          ? "bg-gradient-to-r from-slate-900 to-gray-900"
          : "bg-gradient-to-r from-white to-gray-50"
      }`}
    >
      <nav
        className={`border-b px-4 lg:px-6 py-2.5 transition-all duration-500 ${
          isDarkMode
            ? "bg-gradient-to-r from-slate-900 to-gray-900 border-gray-700"
            : "bg-gradient-to-r from-white to-gray-50 border-gray-200"
        }`}
      >
        <div
          className="flex flex-wrap justify-between
        items-center mx-auto max-w-screen-xl"
        >
          <Link to="/" className="flex items-center">
            <span
              className={`text-2xl font-bold transition-colors duration-300 ${
                isDarkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Jawad - Full Stack Developer Portfolio{" "}
            </span>
          </Link>
          <div className="flex items-center lg:order-2">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className={`font-medium rounded-lg text-sm p-2.5 mr-2 focus:outline-none transition-all duration-300 ${
                isDarkMode
                  ? "whitetext- hover:bg-gray-700 focus:ring-gray-600"
                  : "text-gray-900 hover:bg-gray-200 focus:ring-blue-300"
              }`}
              title={
                isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"
              }
            >
              {isDarkMode ? "☀️" : "🌙"}
            </button>
            <Link
              to="#"
              className={`font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none transition-all duration-300 ${
                isDarkMode
                  ? "text-gray-200 hover:bg-gray-700 focus:ring-gray-600"
                  : "text-gray-700 hover:bg-gray-200 focus:ring-blue-300"
              }`}
            >
              Log in
            </Link>
            <Link
              to="#"
              className="text-white bg-orange-600 hover:bg-orange-700 focus:ring-4 focus:ring-orange-500 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none transition-all duration-300"
            >
              Get started
            </Link>
          </div>
          <div
            className="hidden justify-between items-center 
            w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul
              className="flex flex-col mt-4 font-medium
            lg:flex-row lg:space-x-8 lg:mt-0"
            >
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 transition-colors ${
                      isDarkMode
                        ? `text-white ${
                            isActive ? "text-orange-400" : "text-gray-300"
                          } border-b border-gray-700 hover:bg-gray-800`
                        : `text-gray-900 ${
                            isActive ? "text-blue-600" : "text-gray-700"
                          } border-b border-gray-200 hover:bg-gray-100`
                    } lg:hover:bg-transparent lg:border-0
                    hover:text-orange-400 lg:p-0`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 transition-colors ${
                      isDarkMode
                        ? `text-white ${
                            isActive ? "text-orange-400" : "text-gray-300"
                          } border-b border-gray-700 hover:bg-gray-800`
                        : `text-gray-900 ${
                            isActive ? "text-blue-600" : "text-gray-700"
                          } border-b border-gray-200 hover:bg-gray-100`
                    } lg:hover:bg-transparent lg:border-0
                    hover:text-orange-400 lg:p-0`
                  }
                >
                  About
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/projects"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 transition-colors ${
                      isDarkMode
                        ? `text-white ${
                            isActive ? "text-orange-400" : "text-gray-300"
                          } border-b border-gray-700 hover:bg-gray-800`
                        : `text-gray-900 ${
                            isActive ? "text-blue-600" : "text-gray-700"
                          } border-b border-gray-200 hover:bg-gray-100`
                    } lg:hover:bg-transparent lg:border-0
                    hover:text-orange-400 lg:p-0`
                  }
                >
                  Projects
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 transition-colors ${
                      isDarkMode
                        ? `text-white ${
                            isActive ? "text-orange-400" : "text-gray-300"
                          } border-b border-gray-700 hover:bg-gray-800`
                        : `text-gray-900 ${
                            isActive ? "text-blue-600" : "text-gray-700"
                          } border-b border-gray-200 hover:bg-gray-100`
                    } lg:hover:bg-transparent lg:border-0
                    hover:text-orange-400 lg:p-0`
                  }
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
