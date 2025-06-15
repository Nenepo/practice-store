"use client";

import { ChevronLeft, Search, Settings2 } from "lucide-react";
import { useState } from "react";

const HeadersButtons = () => {
  const [isOpen, setIsOpen] = useState(true);
  const handleOpen = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <section className="w-full">
      <div className="flex justify-between items-center pt-6 px-9">
        <div>
          <button className="cursor-pointer">
            <ChevronLeft />
          </button>
        </div>
        <div className="flex gap-8">
          <button className="cursor-pointer">
            <Settings2 />
          </button>
          <div className="md:block hidden">
            {isOpen ? <button className="cursor-pointer md:block" onClick={handleOpen}>
              <Search />
            </button> : <input type="search" placeholder="Search" className=""/>}
          </div>
          <input type="search" placeholder="Search" className=" md:hidden block border rounded-sm p-1 focus:outline-none"/>
        </div>
      </div>
    </section>
  );
};

export default HeadersButtons;
