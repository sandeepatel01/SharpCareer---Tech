import React from "react";

function Header() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-4 bg-black text-white">
      <div className="flex items-center mt-2 md:mt-6  px-2">
        <img
          src="/assets/logo.png"
          alt="Logo"
          className="h-8 w-8 sm:h-10 sm:w-10 mr-2"
        />
        <p className="text-lg sm:text-2xl font-bold">SharpCareer</p>
      </div>
    </div>
  );
}

export default Header;
