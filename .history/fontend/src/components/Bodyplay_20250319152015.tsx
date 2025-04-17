import React from "react";
import Chat from "./chat";
const Bodyplay: React.FC=()=>{
    return(
        <div>
            <aside className="hidden md:block w-full border-r border-gray-700 p-2">
                <h2 className="text-xl text-white font-bold mb-4">Thư viện</h2>
                <div
                    className="bg-[#2A2A2A] text-white w-full rounded-md px-3 py-2 text-left hover:bg-[#333333] transition"
                    aria-label="Create Playlist"
                >
                    <h3>Tạo danh sách phát đầu tiên của bạn </h3>
                    <h4></h4>
                    <button className="px-4 py-2 bg-white text-black rounded-full text-sm font-semibold hover:bg-gray-200 hover:scale-110 transition mt-4 " aria-label="Login">
                        Tạo danh sách phát
                    </button>
                </div>
                <div
                    className="bg-[#2A2A2A] w-full rounded-md px-3 py-2 text-left mt-2 hover:bg-[#333333] transition"
                    aria-label="Liked Songs"
                >
                    Bài hát đã thích
                </div>
                <hr className="my-4 border-gray-700" />
                <p className="text-sm text-gray-400">
                    Hãy đăng nhập để đồng bộ mọi thứ với một tài khoản.
                </p>
            </aside>
            <Chat />
        </div>
        )
}
export default Bodyplay;