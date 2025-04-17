import React from "react";
import anh from "../assets/TaylorSwitt.jpg";
import anh2 from "../assets/Rosé_and_Bruno_Mars_-_Apt..png";

const Bodycontent: React.FC=()=>{
    return(
        <main className="flex-1 p-4 ">
        <h1 className="text-2xl font-bold mb-4">Những bài hát thịnh hành</h1>
        <div className="flex gap-4 overflow-x-auto  md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 md:overflow-x-hidden">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-40 bg-[#2A2A2A] rounded-md p-3 hover:bg-[#333333] transition"
            >
              <img
                src={anh}
                alt={`Album ${index + 1}`}
                className="w-full h-auto rounded"
              />
              <h3 className="mt-2 font-semibold">Bài hát {index + 1} </h3>
              <h4 className="mt-2 font-semibold"> Rose</h4>
              <div className="flex items-center justify-center bg-gray-100">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center cursor-pointer hover:bg-green-600 transition-colors">
              <div className="w-0 h-0 border-l-[12px] border-l-black border-y-[8px] border-y-transparent"></div>
              </div>
            </div>
            </div>
          ))}
        </div>
  
        <h2 className="text-2xl font-bold mt-8 mb-4">Nghệ sĩ phổ biến</h2>
        <div className="flex gap-4 overflow-x-auto  md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 md:overflow-x-hidden">
          {["Sơn Tùng M-TP", "Soobin", "HIEUTHUHAI", "Jack", "hieu thu 3", "Rose"].map((artist, index) => (
            <div key={index} className="flex flex-col items-center flex-shrink-0 w-40 bg-[#2A2A2A] rounded-md p-3 hover:bg-[#333333] transition">
              <img
                src={anh2}
                alt={`Artist ${index + 1}`}
                className="w-20 h-20 rounded-full object-cover"
              />
              <p className="mt-2">{artist}</p>
            </div>
          ))}
        </div>
      </main>
        )
}
export default Bodycontent;