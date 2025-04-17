import React from "react";
import logo from "../../assets/logo.png";
import logogo from "../../assets/Google__G__logo.svg.webp";
import logoface from "../../assets/Facebook_Logo_(2019).png";

const Login = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-spotify ">
      <div className="bg-[#121212] rounded-lg p-10 lg:w-[40%] w-full h-screen text-white">
        <div className="flex justify-center items-center">
          <img src={logo} alt="Spotify" className="w-10 h-15  " />
        </div>
        <h2 className="text-2xl font-bold text-center mb-6">Đăng nhập vào Spotify</h2>
        
        <button className="w-full py-2 mb-3 bg-black hover:bg-gray-600 rounded-full  flex items-center justify-center">
          <img src="/google-icon.svg" alt="Google" className="w-5 h-5 mr-2" />
          Tiếp tục bằng Google
        </button>
        <button className="w-full py-2 mb-3 bg-black hover:bg-gray-600 rounded-full  flex items-center justify-center">
          <img src="/facebook-icon.svg" alt="Facebook" className="w-5 h-5 mr-2" />
          Tiếp tục bằng Facebook
        </button>
        <button className="w-full py-2 mb-3 bg-black hover:bg-gray-600 rounded-full  flex items-center justify-center">
          <img src="/apple-icon.svg" alt="Apple" className="w-5 h-5 mr-2" />
          Tiếp tục bằng Apple
        </button>
        <button className="w-full py-2 mb-6 bg-black hover:bg-gray-600 rounded-full  flex items-center justify-center">
          Tiếp tục bằng số điện thoại
        </button>

        <input
          type="text"
          placeholder="Email hoặc tên người dùng"
          className="w-full p-2 mb-4 bg-gray-800 rounded border border-white text-white"
        />
        <input
          type="password"
          placeholder="Mật khẩu"
          className="w-full p-2 mb-4 bg-gray-800 rounded border border-white text-white"
        />

        <button className="w-full py-2 bg-green-500 hover:bg-green-600 rounded-full text-black  font-bold">
          Đăng nhập
        </button>
        
        <p className="text-center mt-4 text-gray-400 hover:text-gray-300 cursor-pointer">
          Quên mật khẩu của bạn?
        </p>
      </div>
    </div>
  );
};

export default Login;
