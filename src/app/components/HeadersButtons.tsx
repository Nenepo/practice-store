"use-client";

import { ChevronLeft, Search, Settings2 } from "lucide-react";

const HeadersButtons = () => {
  return (
    <section>
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
          <button className="cursor-pointer">
            <Search />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeadersButtons;
