import React from "react";
import { headerLogo } from "./../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "./../Constants/index";

const Nav = () => {
  return (
    <header className="py-8 absolute z-10 w-full padding-x">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="logo" width={130} height={29} />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item, index) => (
            <li key={index}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-slate-gray"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden max-lg:block">
          <img src={hamburger} alt="hamberger" width={25} height={25} />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
