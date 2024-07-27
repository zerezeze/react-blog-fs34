import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Tags from "./Tags";
import Latest from "./Latest";
import Header from "./Header";
import FormBase from "./FormBase";
import { useTheme } from "../context/ThemeContext.jsx";
import { FaMoon, FaSun, FaSearch } from "react-icons/fa"; // Importa o ícone de lupa, lua e sol

export default function Layout({ children, showSideBar }) {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const [query, setQuery] = useState(searchParams.get("query") || "");

  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <Header className="flex items-center p-3 shadow-md dark:bg-slate-800 bg-white dark:text-white transition-colors duration-300 border border-gray-300 dark:border-slate-700">
        <h1 className="ml-5 font-bold text-2xl dark:text-white">
          <Link to="/">FS34Blog</Link>
        </h1>
        <div className="relative ml-5 flex items-center">
          <input
            type="text"
            onChange={(event) => setQuery(event.target.value)}
            value={query}
            className="border border-gray-300 px-10 py-1 rounded dark:bg-slate-700 dark:border-slate-600 dark:text-white transition-colors duration-300"
            name="query"
            placeholder=""
          />
          <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-white" />
        </div>
        <button className="border rounded border-gray-300 px-2 py-1 ml-2 dark:border-slate-600 dark:text-white dark:bg-slate-800 dark:hover:bg-slate-700 transition-colors duration-300">
          Pesquisar
        </button>
        <button
          onClick={toggleTheme}
          className="flex items-center justify-center border rounded border-gray-300 px-2 py-1 ml-auto dark:border-slate-600 dark:text-white dark:bg-slate-800 dark:hover:bg-slate-700 transition-colors duration-300"
        >
          {theme === "light" ? (
            <FaMoon className="text-lg" />
          ) : (
            <FaSun className="text-lg" />
          )}
        </button>
      </Header>

      <div className="flex px-20 py-10 gap-20 bg-white dark:bg-slate-950 dark:text-white transition-colors duration-300">
        <div>{children}</div>

        {showSideBar && (
          <div>
            <div>
              <Tags />
              <Latest />
            </div>
          </div>
        )}
      </div>
    </>
  );
}
