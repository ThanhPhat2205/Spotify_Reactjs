import React from "react";
import anh from "../assets/TaylorSwitt.jpg";
import anh2 from "../assets/Rosé_and_Bruno_Mars_-_Apt..png";


const Bodycontent: React.FC = () => {
  return (
    <main className="flex-1 p-4">
      <h1 className="text-2xl font-bold mb-4 pt-10">Những bài hát thịnh hành</h1>
      <div className="flex gap-4 overflow-x-auto md:grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 md:overflow-x-hidden">
        {Array.from({ length: 5 }).map((_, index) => (
          <div
            key={index}
            className="relative flex-shrink-0 w-40 bg-[#2A2A2A] rounded-md p-3 hover:bg-[#333333] transition group"
          >
            {/* Nút Play */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center cursor-pointer hover:bg-green-600 transition-colors">
                <div className="w-0 h-0 border-l-[10px] border-l-white border-y-[6px] border-y-transparent"></div>
              </div>
            </div>

            <img src={anh} alt={`Album ${index + 1}`} className="w-full h-auto rounded" />
            <h3 className="mt-2 font-semibold">Bài hát {index + 1}</h3>
            <h4 className="mt-2 font-semibold">Rose</h4>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4 pt-10">Nghệ sĩ phổ biến</h2>
      <div className="flex gap-4 overflow-x-auto md:grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 md:overflow-x-hidden">
        {["Sơn Tùng M-TP", "Soobin", "HIEUTHUHAI", "Jack", "hieu thu 3", "rose"].map((artist, index) => (
          <div
            key={index}
            className="relative flex flex-col items-center flex-shrink-0 w-40 bg-[#2A2A2A] rounded-md p-3 hover:bg-[#333333] transition group"
          >
            {/* Nút Play */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center cursor-pointer hover:bg-green-600 transition-colors">
                <div className="w-0 h-0 border-l-[10px] border-l-white border-y-[6px] border-y-transparent"></div>
              </div>
            </div>

            <img src={anh2} alt={`Artist ${index + 1}`} className="w-20 h-20 rounded-full object-cover" />
            <p className="mt-2">{artist}</p>
          </div>
        ))}
      </div>
      <h1 className="text-2xl font-bold mb-4 pt-10">Radio phổ biến</h1>
      <div className="flex gap-4 overflow-x-auto md:grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 md:overflow-x-hidden">
        {Array.from({ length: 5 }).map((_, index) => (
          <div
            key={index}
            className="relative flex-shrink-0 w-40 bg-[#2A2A2A] rounded-md p-3 hover:bg-[#333333] transition group"
          >
            {/* Nút Play */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center cursor-pointer hover:bg-green-600 transition-colors">
                <div className="w-0 h-0 border-l-[10px] border-l-white border-y-[6px] border-y-transparent"></div>
              </div>
            </div>

            <img src={anh} alt={`Album ${index + 1}`} className="w-full h-auto rounded" />
            <h3 className="mt-2 font-semibold">Bài hát {index + 1}</h3>
            <h4 className="mt-2 font-semibold">Rose</h4>
          </div>
        ))}
      </div>
      <h1 className="text-2xl font-bold mb-4 pt-10">Bảng xếp hạng nổi bật</h1>
      <div className="flex gap-4 overflow-x-auto md:grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 md:overflow-x-hidden">
        {Array.from({ length: 5 }).map((_, index) => (
          <div
            key={index}
            className="relative flex-shrink-0 w-40 bg-[#2A2A2A] rounded-md p-3 hover:bg-[#333333] transition group"
          >
            {/* Nút Play */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center cursor-pointer hover:bg-green-600 transition-colors">
                <div className="w-0 h-0 border-l-[10px] border-l-white border-y-[6px] border-y-transparent"></div>
              </div>
            </div>

            <img src={anh} alt={`Album ${index + 1}`} className="w-full h-auto rounded" />
            <h3 className="mt-2 font-semibold">Bài hát {index + 1}</h3>
            <h4 className="mt-2 font-semibold">Rose</h4>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Bodycontent;

