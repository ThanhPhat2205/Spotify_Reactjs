import React from "react";
import Chat from "./chat";
const Bodyplay: React.FC=()=>{
    return(
        <div>
    <aside className="hidden md:block w-64 border-r border-gray-700 p-4">
      <h2 className="text-xl font-bold mb-4">Thư viện</h2>
      <button
        className="bg-[#2A2A2A] w-full rounded-md px-3 py-2 text-left hover:bg-[#333333] transition"
        aria-label="Create Playlist"
      >
        Tạo danh sách phát đầu tiên của bạn
      </button>
      <button
        className="bg-[#2A2A2A] w-full rounded-md px-3 py-2 text-left mt-2 hover:bg-[#333333] transition"
        aria-label="Liked Songs"
      >
        Bài hát đã thích
      </button>
      <hr className="my-4 border-gray-700" />
      <p className="text-sm text-gray-400">
        Hãy đăng nhập để đồng bộ mọi thứ với một tài khoản.
      </p>
    </aside>
  )
            <Chat />
        </div>
        )
}
export default Bodyplay;