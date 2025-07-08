import React from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";

const base =
  "flex items-center gap-1 px-4 py-1 text-sm rounded-lg border shadow-sm transition mt-6";
const active = "bg-blue-950 text-white";
const inactive = "bg-white text-gray-700 hover:bg-gray-100";

function SortButton({ label, sortKey, sortConfig, onSort }) {
  const isActive = sortConfig?.key === sortKey;
  const direction = sortConfig?.direction;

  return (
    <button
      onClick={() => onSort(sortKey)}
      className={`${base} ${isActive ? active : inactive}`}
    >
      {label}
      <span className="flex flex-col items-center">
        <ChevronUpIcon
          className={`w-4 h-4 ${
            isActive && direction === "asc" ? "opacity-100" : "opacity-40"
          }`}
        />
        <ChevronDownIcon
          className={`w-4 h-4 ${
            isActive && direction === "desc" ? "opacity-100" : "opacity-40"
          }`}
        />
      </span>
    </button>
  );
}

export default SortButton;
