"use client";

import Link from "next/link";
import { useState } from "react";
import { FaBook, FaEnvelope, FaFile } from "react-icons/fa";

const links = [
  { id: 1, name: "Task Manager", href: "tasks-page", icon: <FaFile /> },
  { id: 2, name: "About", href: "about", icon: <FaBook /> },
  { id: 3, name: "Contact", href: "contact", icon: <FaEnvelope /> },
];

function BurgerMenu() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleShowMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleCloseMenu = () => {
    setShowMenu(false);
  };

  return (
    <div>
      <div>
        <button
          className="flex flex-col cursor-pointer"
          onClick={toggleShowMenu}
        >
          <span className="bg-orange-50 w-8 h-[.2rem] lg:h-[.3rem] mb-1"></span>
          <span className="bg-orange-50 w-8 h-[.2rem] lg:h-[.3rem] mb-1"></span>
          <span className="bg-orange-50 w-8 h-[.2rem] lg:h-[.3rem]"></span>
        </button>
      </div>
      <div className="relative">
        {showMenu ? (
          <ul className="flex flex-col text-xs lg:text-sm gap-8 font-semibold absolute top-6 -right-3 lg:-right-8 bg-orange-500 p-10">
            {links.map((link) => (
              <li
                onClick={handleCloseMenu}
                key={link.id}
                className="hover:text-amber-200 active:text-amber-50"
              >
                <Link
                  className="pb-2 flex justify-between gap-10 items-center w-full"
                  href={link.href}
                >
                  {link.icon}
                  <p className="w-[50%]">{link.name}</p>
                </Link>
                <span className="bg-orange-50 w-[78%] h-[.1rem] absolute right-6"></span>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </div>
  );
}

export default BurgerMenu;
