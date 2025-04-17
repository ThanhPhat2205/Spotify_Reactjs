import React, { useState } from "react";
import logo from "../assets/logo.png";
import { Link } from 'react-router-dom';

const Header: React.FC=()=>{
  const [isMenuOpen, setIsMenuOpen] = useState(false); //quản lý repossvive
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
return(
    <header className=" fixed top-0 w-full z-10 flex items-center bg-black justify-between p-4 border-b border-gray-700">
      <img src={logo} alt="Logo" className="h-10 hidden md:block" />
      <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-400 hover:text-white focus:outline-none "
            aria-label="Menu"
          >
            <svg
              className="w-5 h-5 text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              aria-label="Search Icon"
            >
              {isMenuOpen ? (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.829-4.828 4.829a1 1 0 0 1-1.414-1.414l4.829-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.828 4.829 4.829z"
                  />
                ) : (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2z"
                  />
                )}
            </svg>
          </button>
        </div>
      <div className="bg-[#2A2A2A] flex items-center  space-x-2 flex-1 max-w-[300px] md:max-w-[400px] rounded-full p-1 ">
      <svg
          className="w-5 h-5 text-gray-400"
          fill="currentColor"
          viewBox="0 0 20 20"
          aria-label="Search Icon"
        >
          <path
            fillRule="evenodd"
            d="M12.9 14.32a8 8 0 111.414-1.414l4.387 4.386a1 1 0 01-1.414 1.414l-4.386-4.387zM14 8a6 6 0 11-12 0 6 6 0 0112 0z"
            clipRule="evenodd"
          />
        </svg>
        <input
          type="text"
          placeholder="Bạn muốn phát nội dung gì?"
          className="bg-[#2A2A2A] text-sm  text-white p-2 w-full rounded-md outline-none placeholder:text-gray-400"
          aria-label="Search input"
        />

      </div>

      <nav className={`${
          isMenuOpen ? 'flex flex-col absolute top-full left-0 w-full bg-black p-4 space-y-4' : 'hidden md:flex items-center space-x-6 ml-4'
        }`}>
        <Link to="#" className="text-sm hover:scale-110 hover:text-white transition text-gray-400" aria-label="Premium" >
          Premium
        </Link>
        <Link to="#" className="text-sm hover:scale-110 hover:text-white transition text-gray-400" aria-label="Support">
          Hỗ trợ
        </Link>
        <Link to="#" className="text-sm hover:scale-110 hover:text-white transition text-gray-400" aria-label="Download">
          Tải xuống
        </Link>
        <Link to="#" className="text-sm hover:scale-110 hover:text-white transition text-gray-400" aria-label="Install App">
          Cài đặt Ứng dụng
        </Link>
      </nav>

      <div className="ml-4">
        <button
          className="px-4 py-2 bg-white text-black rounded-full text-sm font-semibold hover:bg-gray-200 hover:scale-110 transition"
          aria-label="Login"
        >
          Đăng nhập
        </button>
      </div>
    </header>
)
}
export default Header;