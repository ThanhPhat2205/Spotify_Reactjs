import React from "react";
import logo from "./assets/";

const Header: React.FC=()=>{
return(
    <header className="flex items-center justify-between p-4 border-b border-gray-700">
      <div className="bg-[#2A2A2A] flex items-center space-x-2 flex-1 max-w-[300px] md:max-w-[400px] rounded-full p-1">
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
          className="bg-[#2A2A2A] text-sm text-white p-2 w-full rounded-md outline-none placeholder:text-gray-400"
          aria-label="Search input"
        />
      </div>

      <nav className="hidden md:flex items-center space-x-6 ml-4">
        <a href="#" className="text-sm hover:underline" aria-label="Premium">
          Premium
        </a>
        <a href="#" className="text-sm hover:underline" aria-label="Support">
          Hỗ trợ
        </a>
        <a href="#" className="text-sm hover:underline" aria-label="Download">
          Tải xuống
        </a>
        <a href="#" className="text-sm hover:underline" aria-label="Install App">
          Cài đặt Ứng dụng
        </a>
      </nav>

      <div className="ml-4">
        <button
          className="px-4 py-2 bg-white text-black rounded-full text-sm font-semibold hover:bg-gray-200 transition"
          aria-label="Login"
        >
          Đăng nhập
        </button>
      </div>
    </header>
)
}
export default Header;