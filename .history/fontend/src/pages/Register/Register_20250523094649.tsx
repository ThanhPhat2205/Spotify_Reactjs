import React, { useState } from "react";
import axios from "axios";
import logo from "../../assets/logo.png";
import logogo from "../../assets/Google__G__logo.svg.webp";
import logoface from "../../assets/Facebook_Logo_(2019).png";
import logoap from "../../assets/images.png";
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [subscription] = useState("free"); // Mặc định là free
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Mật khẩu xác nhận không khớp.");
      return;
    }
    try {
      const response = await axios.post("http://127.0.0.1:8000/api/register/", {
        username,
        email,
        password,
        subscription,
      });
      const { token } = response.data;
      localStorage.setItem("token", token); // Lưu token vào localStorage
      setError("");
      navigate("/login"); // Chuyển hướng sau khi đăng ký thành công
    } catch (err: any) {
      setError(err.response?.data?.error || "Đăng ký thất bại. Vui lòng thử lại.");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-spotify">
      <div className="bg-[#121212] rounded-lg p-10 lg:w-[40%] w-full h-screen text-white">
        <div className="flex justify-center items-center">
          <img src={logo} alt="Spotify" className="w-10 h-15" />
        </div>
        <h2 className="text-2xl font-bold text-center mb-6">Đăng ký Spotify</h2>

        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        <button className="w-full py-2 mb-3 bg-black hover:bg-gray-600 rounded-full flex items-center justify-center">
          <img src={logogo} alt="Google" className="w-5 h-5 mr-2" />
          Tiếp tục bằng Google
        </button>
        <button className="w-full py-2 mb-3 bg-black hover:bg-gray-600 rounded-full flex items-center justify-center">
          <img src={logoface} alt="Facebook" className="w-5 h-5 mr-2" />
          Tiếp tục bằng Facebook
        </button>
        <button className="w-full py-2 mb-3 bg-black hover:bg-gray-600 rounded-full flex items-center justify-center">
          <img src={logoap} alt="Apple" className="w-5 h-5 mr-2" />
          Tiếp tục bằng Apple
        </button>
        <button className="w-full py-2 mb-6 bg-black hover:bg-gray-600 rounded-full flex items-center justify-center">
          Tiếp tục bằng số điện thoại
        </button>

        <form onSubmit={handleRegister}>
          <input
            type="text"
            placeholder="Tên người dùng"
            className="w-full p-2 mb-4 bg-gray-800 rounded border border-white text-white"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 mb-4 bg-gray-800 rounded border border-white text-white"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Mật khẩu"
            className="w-full p-2 mb-4 bg-gray-800 rounded border border-white text-white"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder="Xác nhận mật khẩu"
            className="w-full p-2 mb-4 bg-gray-800 rounded border border-white text-white"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <button
            type="submit"
            className="w-full py-2 bg-green-500 hover:bg-green-600 rounded-full text-black font-bold"
          >
            Đăng ký
          </button>
        </form>

        <Link to="/login" className="text-center mt-4 text-gray-400 hover:text-gray-300 cursor-pointer block">
          Đã có tài khoản? Đăng nhập
        </Link>
      </div>
    </div>
  );
};

export default Register;