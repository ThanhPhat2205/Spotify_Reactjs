import React from "react";
im

const HomePage: React.FC = () => {
  return (
    <div className="bg-[#121212] text-white min-h-screen flex flex-col">
      {/* Thanh trên cùng (Header) */}
      <header className="flex items-center justify-between p-4 border-b border-gray-700">
        {/* Tìm kiếm (bên trái) */}
        <div className="flex items-center space-x-2 flex-1 max-w-[300px] md:max-w-[400px]">
          {/* Icon Search (có thể dùng icon từ Heroicons hoặc FontAwesome) */}
          <svg
            className="w-5 h-5 text-gray-400"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M12.9 14.32a8 8 0 111.414-1.414l4.387 4.386a1 1 0 01-1.414 1.414l-4.386-4.387zM14 8a6 6 0 11-12 0 6 6 0 0112 0z"
              clipRule="evenodd"
            />
          </svg>
          <input
            type="text"
            placeholder="Bạn muốn phát gì hôm nay?"
            className="bg-[#2A2A2A] text-sm p-2 w-full rounded-md outline-none placeholder:text-gray-400"
          />
        </div>

        {/* Menu ngang (bên giữa) - Ẩn trên mobile, hiện trên màn hình lớn */}
        <nav className="hidden md:flex items-center space-x-6 ml-4">
          <a href="#" className="text-sm hover:underline">
            Premium
          </a>
          <a href="#" className="text-sm hover:underline">
            Hỗ trợ
          </a>
          <a href="#" className="text-sm hover:underline">
            Tải xuống
          </a>
          <a href="#" className="text-sm hover:underline">
            Cài đặt Ứng dụng
          </a>
        </nav>

        {/* Đăng nhập (bên phải) */}
        <div className="ml-4">
          <button className="px-4 py-2 bg-white text-black rounded-full text-sm font-semibold hover:bg-gray-200 transition">
            Đăng nhập
          </button>
        </div>
      </header>

      {/* Vùng nội dung chính (chia làm Sidebar trái + Main) */}
      <div className="flex flex-1">
        {/* Sidebar trái (ẩn trên mobile, hiện trên màn hình >= md) */}
        <aside className="hidden md:block w-64 border-r border-gray-700 p-4">
          <h2 className="text-xl font-bold mb-4">Thư viện</h2>

          <button className="bg-[#2A2A2A] w-full rounded-md px-3 py-2 text-left hover:bg-[#333333] transition">
            Tạo danh sách phát đầu tiên của bạn
          </button>
          <button className="bg-[#2A2A2A] w-full rounded-md px-3 py-2 text-left mt-2 hover:bg-[#333333] transition">
            Bài hát đã thích
          </button>

          <hr className="my-4 border-gray-700" />

          <p className="text-sm text-gray-400">
            Hãy đăng nhập để đồng bộ mọi thứ với một tài khoản.
          </p>
        </aside>

        {/* Phần nội dung chính */}
        <main className="flex-1 p-4 overflow-auto">
          {/* Danh sách Bài hát thịnh hành */}
          <h1 className="text-2xl font-bold mb-4">Những bài hát thịnh hành</h1>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {/* Card bài hát */}
            <div className="bg-[#2A2A2A] rounded-md p-3 hover:bg-[#333333] transition">
              <img
                src="https://via.placeholder.com/300"
                alt="Album 1"
                className="w-full h-auto rounded"
              />
              <p className="mt-2 font-semibold">Bất ngờ chưa anh</p>
            </div>

            <div className="bg-[#2A2A2A] rounded-md p-3 hover:bg-[#333333] transition">
              <img
                src="https://via.placeholder.com/300"
                alt="Album 2"
                className="w-full h-auto rounded"
              />
              <p className="mt-2 font-semibold">Dancing in the Rain</p>
            </div>

            <div className="bg-[#2A2A2A] rounded-md p-3 hover:bg-[#333333] transition">
              <img
                src="https://via.placeholder.com/300"
                alt="Album 3"
                className="w-full h-auto rounded"
              />
              <p className="mt-2 font-semibold">I AM MUSIC</p>
            </div>

            <div className="bg-[#2A2A2A] rounded-md p-3 hover:bg-[#333333] transition">
              <img
                src="https://via.placeholder.com/300"
                alt="Album 4"
                className="w-full h-auto rounded"
              />
              <p className="mt-2 font-semibold">Lẻ Đường</p>
            </div>

            <div className="bg-[#2A2A2A] rounded-md p-3 hover:bg-[#333333] transition">
              <img
                src="https://via.placeholder.com/300"
                alt="Album 5"
                className="w-full h-auto rounded"
              />
              <p className="mt-2 font-semibold">Bật trái tim lên</p>
            </div>
          </div>

          {/* Nghệ sĩ phổ biến */}
          <h2 className="text-2xl font-bold mt-8 mb-4">Nghệ sĩ phổ biến</h2>
          <div className="flex gap-6 overflow-x-auto">
            <div className="flex flex-col items-center">
              <img
                src="https://via.placeholder.com/100"
                alt="Artist 1"
                className="w-20 h-20 rounded-full object-cover"
              />
              <p className="mt-2">Sơn Tùng M-TP</p>
            </div>

            <div className="flex flex-col items-center">
              <img
                src="https://via.placeholder.com/100"
                alt="Artist 2"
                className="w-20 h-20 rounded-full object-cover"
              />
              <p className="mt-2">Soobin</p>
            </div>

            <div className="flex flex-col items-center">
              <img
                src="https://via.placeholder.com/100"
                alt="Artist 3"
                className="w-20 h-20 rounded-full object-cover"
              />
              <p className="mt-2">HIEUTHUHAI</p>
            </div>

            <div className="flex flex-col items-center">
              <img
                src="https://via.placeholder.com/100"
                alt="Artist 4"
                className="w-20 h-20 rounded-full object-cover"
              />
              <p className="mt-2">Jack</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default HomePage;
