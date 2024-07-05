import React from "react";
import Hamburger from "./icons/Hamburger";
import Search from "./icons/Search";
import Favourite from "./icons/Favourite";
import ShoppingBag from "./icons/ShoppingBag";

function Navbar() {
  return (
    <div className="flex w-full p-2 px-4 justify-between items-center">
      <div className="flex gap-3 items-center"> 
        <Hamburger />
        <Search />
      </div>
      <h2 className="font-bold text-2xl">FARFETCH</h2>
      <div className="flex gap-3 items-center">
        <Favourite />
        <ShoppingBag />
      </div>
    </div>
  );
}

export default Navbar;
