"use client";

import { Scrollchor } from "react-scrollchor";

const NavBar: React.FC = () => {
  return (
    <div className="flex justify-end">
      <nav className="flex justify-around w-72">
        <Scrollchor
          className="relative font-camphor text-xl text-[#5a5d7a] after:block after:absolute after:left-0 after:bottom-[-20px] after:w-0 after:h-2 after:bg-[#747fe0] after:transition-width after:duration-500 hover:text-[#7795f8] hover:after:w-full"
          to="#projects"
        >
          Projects
        </Scrollchor>
        <Scrollchor
          className="relative font-camphor text-xl text-[#5a5d7a] after:block after:absolute after:left-0 after:bottom-[-20px] after:w-0 after:h-2 after:bg-[#747fe0] after:transition-width after:duration-500 hover:text-[#7795f8] hover:after:w-full"
          to="#contacts"
        >
          Contacts
        </Scrollchor>
      </nav>
    </div>
  );
};

export default NavBar;
