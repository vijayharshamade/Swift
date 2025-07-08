import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-[#1E2248]">
      <div className="mx-auto max-w-5xl  px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center md:ms-4 md-l-12">
            <div className="-skew-x-[12deg]">
              <div className="w-8 h-8 bg-green-600 flex items-center justify-center skew-x-[12deg]">
                <span className="text-white font-bold">S</span>
              </div>
            </div>

            <span className="text-white text-lg font-semibold tracking-wide">
              WIFT
            </span>
          </Link>

          <Link to="/profile" className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-[#1E2248] font-semibold">
              LG
            </div>
            <span className="text-white font-medium hidden md:block">
              Leanne&nbsp;Graham
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
