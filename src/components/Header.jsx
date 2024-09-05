import React, { useState } from "react";
import {FaBars, FaTimes} from "react-icons/fa";
import {Link} from 'react-scroll';

const Header = () => {
  const [nav, setNav] = useState(false)

  const links = [
    {
      id: 1,
      link: "Home",
    },
    {
      id: 2,
      link: "Services",
    },
    {
      id: 4,
      link: "Blog",
    },
    {
      id: 5,
      link: "Start",
    },
  ];
  return (
    <div className="flex justify-between py-5 px-10 z-10 lg:px-40 md:px-28 w-screen bg-gradient-to-br from-purple-100 to-purple-200 fixed">
      <h2 className=" cursor-pointer font-bold text-2xl">Aryan</h2>
      <div>
        <ul className="justify-between space-x-20 text-lg hidden md:flex">
          {links.map(({id, link})=>(
            <li 
            key={id}
            className="cursor-pointer hover:scale-105 duration-300">
              {link}
            </li>
          ))}
        </ul>

        <div onClick={()=> setNav(!nav)}
          className="md:hidden cursor-pointer z-10 "
          >
          {nav ? <FaTimes size={20} /> : <FaBars size={20} />}
        </div>
        {nav && (
        <ul className="">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="cursor-pointer py-6 duration-300 "
            >
              <Link
                className="md:hidden"
                onClick={() => setNav(!nav)}
                to={link}
                smooth
                duration={500}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
      </div>
    </div>
  );
};

export default Header;
