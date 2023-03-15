import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BsMinecartLoaded } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
function Header({ setToken }) {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const listLI = [
    { name: "Favoritos", to: "/productos" },
    { name: "Categorias", to: "/productos" },
    { name: "Ofertas", to: "/productos" },
    { name: "Iniciar Sesion", to: "/productos" },
  ]

  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };

  const logInOrOut = () => {
    let token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
      return
    }
    localStorage.removeItem('token');
    setToken(false);
  }


  return (

    <div className='bg-[#d1d1d1]'>

      <nav className=" max-w-6xl my-0 mx-auto flex justify-between items-center h-[60px] sticky top-0">
        <div className=" first-letter:text-gray-700 bg-gray-200 h-[48px] w-[193px] flex items-center justify-center">
          <span>Ecommerce </span>
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
            <ul className='flex items-center justify-center gap-3'>
              {listLI.map((link, index) => (
                <li key={index} className=''>
                  <Link to={link.to} >{link.name}</Link>
                </li>
              ))}
              <FaUser onClick={() => logInOrOut()} className='hover:scale-[1.2] cursor-pointer'/>
              <BsMinecartLoaded />
              <div className={` ${localStorage.getItem('token') ? 'opacity-100 visible' : 'opacity-0 invisible w-0 h-0'} hover:cursor-pointer bg-green-200 w-[40px] h-[40px] rounded-[50%] border-[2px] border-solid border-indigo-500 flex items-center justify-center`}>
                <div className='w-[30px] h-[30px]  rounded-[50%]  border-[2px] border-solid border-green-600 flex items-center justify-center'>
                  <span className='font-bold text-purple-800'>M</span>
                </div>
              </div>
            </ul>
          </div>

      </nav>
    </div>
  );
}

export default Header;