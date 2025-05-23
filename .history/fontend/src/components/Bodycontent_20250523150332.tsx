import React, { useState, useEffect } from "react";
import axios from "axios";
import anh from "../assets/TaylorSwitt.jpg";
import anh2 from "../assets/Rosé_and_Bruno_Mars_-_Apt..png";

const Bodycontent: React.FC = () => {
  const [tracks, setTracks] = useState<any[]>([]);
  const [albums, setAlbums] = useState<any[]>([]);
  const [artists, setArtists] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token"); // Lấy token từ localStorage (nếu cần xác thực)
        const headers = token ? { Authorization: `Token ${token}` } : {};

        // Gọi API để lấy Tracks
        const tracksResponse = await axios.get("http://127.0.0.1:8000/api/tracks/", { headers });
        setTracks(tracksResponse.data);

        // Gọi API để lấy Albums
        const albumsResponse = await axios.get("http://127.0.0.1:8000/api/albums/", { headers });
        setAlbums(albumsResponse.data);

        // Gọi API để lấy Artists
        const artistsResponse = await axios.get("http://127.0.0.1:8000/api/artists/", { headers });
        setArtists(artistsResponse.data);

        setLoading(false);
      } catch (err: any) {
        console.error("Lỗi khi gọi API:", err);
        setError(err.response?.data?.error || "Không thể tải dữ liệu. Vui lòng thử lại.");
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div className="flex-1 p-4 text-center text-white">Đang tải dữ liệu...</div>;
  }

  if (error) {
    return <div className="flex-1 p-4 text-center text-red-500">{error}</div>;
  }

  return (
    <main className="flex-1 p-4">
      <h1 className="text-2xl font-bold mb-4 pt-10">Những bài hát thịnh hành</h1>
      <div className="flex gap-4 overflow-x-auto md:grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 md:overflow-x-hidden">
        {tracks.slice(0, 5).map((track, index) => (
          <div
            key={track.id || index}
            className="relative flex-shrink-0 w-40 bg-[#2A2A2A] rounded-md p-3 hover:bg-[#333333] transition group"
          >
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center cursor-pointer hover:bg-green-600 transition-colors">
                <div className="w-0 h-0 border-l-[10px] border-l-white border-y-[6px] border-y-transparent"></div>
              </div>
            </div>
            <img
              src={track.image ? `http://127.0.0.1:8000${track.image}` : anh}
              alt={track.title || `Album ${index + 1}`}
              className="w-full h-auto rounded"
            />
            <h3 className="mt-2 font-semibold">{track.title || `Bài hát ${index + 1}`}</h3>
            <h4 className="mt-2 font-semibold">
              {track.artists && track.artists.length > 0 ? track.artists[0].name : "Rose"}
            </h4>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4 pt-10">Nghệ sĩ phổ biến</h2>
      <div className="flex gap-4 overflow-x-auto md:grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 md:overflow-x-hidden">
        {artists.slice(0, 6).map((artist, index) => (
          <div
            key={artist.id || index}
            className="relative flex flex-col items-center flex-shrink-0 w-40 bg-[#2A2A2A] rounded-md p-3 hover:bg-[#333333] transition group"
          >
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center cursor-pointer hover:bg-green-600 transition-colors">
                <div className="w-0 h-0 border-l-[10px] border-l-white border-y-[6px] border-y-transparent"></div>
              </div>
            </div>
            <img
              src={artist.image ? `http://127.0.0.1:8000${artist.image}` : anh2}
              alt={artist.name || `Artist ${index + 1}`}
              className="w-20 h-20 rounded-full object-cover"
            />
            <p className="mt-2">{artist.name || "Unknown Artist"}</p>
          </div>
        ))}
      </div>

      <h1 className="text-2xl font-bold mb-4 pt-10">Radio phổ biến</h1>
      <div className="flex gap-4 overflow-x-auto md:grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 md:overflow-x-hidden">
        {albums.slice(0, 5).map((album, index) => (
          <div
            key={album.id || index}
            className="relative flex-shrink-0 w-40 bg-[#2A2A2A] rounded-md p-3 hover:bg-[#333333] transition group"
          >
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center cursor-pointer hover:bg-green-600 transition-colors">
                <div className="w-0 h-0 border-l-[10px] border-l-white border-y-[6px] border-y-transparent"></div>
              </div>
            </div>
            <img
              src={album.image ? `http://127.0.0.1:8000${album.image}` : anh}
              alt={album.title || `Album ${index + 1}`}
              className="w-full h-auto rounded"
            />
            <h3 className="mt-2 font-semibold">{album.title || `Album ${index + 1}`}</h3>
            <h4 className="mt-2 font-semibold">
              {album.artists && album.artists.length > 0 ? album.artists[0].name : "Rose"}
            </h4>
          </div>
        ))}
      </div>

      <h1 className="text-2xl font-bold mb-4 pt-10">Bảng xếp hạng nổi bật</h1>
      <div className="flex gap-4 overflow-x-auto md:grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 md:overflow-x-hidden">
        {tracks.slice(0, 5).map((track, index) => (
          <div
            key={track.id || index}
            className="relative flex-shrink-0 w-40 bg-[#2A2A2A] rounded-md p-3 hover:bg-[#333333] transition group"
          >
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center cursor-pointer hover:bg-green-600 transition-colors">
                <div className="w-0 h-0 border-l-[10px] border-l-white border-y-[6px] border-y-transparent"></div>
              </div>
            </div>
            <img
              src={track.image ? `http://127.0.0.1:8000${track.image}` : anh}
              alt={track.title || `Album ${index + 1}`}
              className="w-full h-auto rounded"
            />
            <h3 className="mt-2 font-semibold">{track.title || `Bài hát ${index + 1}`}</h3>
            <h4 className="mt-2 font-semibold">
              {track.artists && track.artists.length > 0 ? track.artists[0].name : "Rose"}
            </h4>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Bodycontent;