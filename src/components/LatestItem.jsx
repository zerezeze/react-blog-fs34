import React from "react";

export default function LatestItem({ name, href = "" }) {
  return (
    <li className="p-2">
      <a
        className="text-gray-700 hover:text-black dark:text-white dark:hover:text-gray-300 transition-colors duration-300"
        href={href}
      >
        {name}
      </a>
    </li>
  );
}
