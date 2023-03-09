import { useState } from 'react';
import { Link } from 'react-router-dom';
import { BsMinecartLoaded } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const listLI = [
    {name:"Productos", to:"/productos"},
    {name:"Productos", to:"/productos"},
    {name:"Productos", to:"/productos"},
    {name:"Productos", to:"/productos"},
  ]

  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex items-center justify-between flex-wrap p-3 md:fixed w-full z-10 ">
      <div className="flex items-center flex-shrink-0  mr-6">
        <span>LOGO</span>
      </div>
      <div className=" md:hidden flex items-center gap-4">
        <button
          onClick={handleMenuClick}
          className="flex items-center px-3 py-2 border rounded "
        >
          <svg
            className="h-3 w-3"
            fill="none"
            viewBox="0 0 12 12"
            stroke="currentColor"
          >
            {!isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 4h6M3 8h6"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4.5 4.5l3 3M7.5 4.5l-3 3"
              />
            )}
          </svg>
        </button>
      </div>
      <div
        className={`${
          isOpen ? '' : 'hidden'
        } w-full block flex-grow md:flex md:items-center md:w-auto justify-end`}
      >
        <div className="text-sm md:flex-grow ">
          <ul className='flex gap-4 max-md:flex-col justify-end'>
          {listLI.map((link,index) =>(
            <li key={index} className=''>
              <Link to={link.to} >{link.name}</Link>
            </li>
            ))}
            <FaUser />
            <BsMinecartLoaded/>
            </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;