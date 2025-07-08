import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

function SearchBar({ value, onChange }) {
  return (
    <div className="relative w-full md:w-96 mt-6 ">
      <MagnifyingGlassIcon className="w-5 h-5 text-gray-500 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />

      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search name, email, comment"
        className="
    w-full
    sm:w-full
    md:w-80
    lg:w-80
    xl:w-80
    pl-10 pr-4 py-2 text-sm
    border rounded-lg
    focus:outline-none focus:ring-2 focus:ring-blue-950
    bg-white shadow-sm
  "
      />
    </div>
  );
}
export default SearchBar;
