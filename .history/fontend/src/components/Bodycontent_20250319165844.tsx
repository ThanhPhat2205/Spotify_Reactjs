import React from "react";
import anh from "../assets/Jusstinbier.jpg"''
const Bodycontent: React.FC=()=>{
    return(
        <main className="flex-1 p-4 overflow-auto">
        <h1 className="text-2xl font-bold mb-4">Những bài hát thịnh hành</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 flex-wrap">
          {Array.from({ length: 5 }).map((_, index) => (
            <div
              key={index}
              className="bg-[#2A2A2A] rounded-md p-3 hover:bg-[#333333] transition"
            >
              <img
                src="../assets//Jusstinbier.jpg"
                alt={`Album ${index + 1}`}
                className="w-full h-auto rounded"
              />
              <p className="mt-2 font-semibold">Bài hát {index + 1}</p>
            </div>
          ))}
        </div>
  
        <h2 className="text-2xl font-bold mt-8 mb-4">Nghệ sĩ phổ biến</h2>
        <div className="flex gap-6 overflow-x-auto flex-wrap">
          {["Sơn Tùng M-TP", "Soobin", "HIEUTHUHAI", "Jack"].map((artist, index) => (
            <div key={index} className="flex flex-col items-center">
              <img
                src="./assets/Jusstinbier.jpg"
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