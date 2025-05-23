import React, { useState, useEffect, useRef, ChangeEvent } from "react";
import axios from "axios";
import anh from "../assets/TaylorSwitt.jpg";
import anh2 from "../assets/Rosé_and_Bruno_Mars_-_Apt..png";

const Bodycontent: React.FC = () => {
  const [tracks, setTracks] = useState<any[]>([]);
  const [albums, setAlbums] = useState<any[]>([]);
  const [artists, setArtists] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [currentTrack, setCurrentTrack] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        const headers = token ? { Authorization: `Token ${token}` } : {};

        const tracksResponse = await axios.get("http://127.0.0.1:8000/api/tracks/", { headers });
        setTracks(tracksResponse.data);

        const albumsResponse = await axios.get("http://127.0.0.1:8000/api/albums/", { headers });
        setAlbums(albumsResponse.data);

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

  const handlePlay = (track: any) => {
    setCurrentTrack(track);
  };

  return (
    <main className="flex-1 p-4">
      <h1 className="text-2xl font-bold mb-4 pt-10">Những bài hát thịnh hành</h1>
      <div className="flex gap-4 overflow-x-auto md:grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 md:overflow-x-hidden">
        {tracks.slice(0, 5).map((track, index) => (
          <div
            key={track.id || index}
            className="relative flex-shrink-0 w-40 bg-[#2A2A2A] rounded-md p-3 hover:bg-[#333333] transition group"
          >
            <div
              className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out"
              onClick={() => handlePlay(track)}
            >
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
            <div
              className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out"
              onClick={() => {
                const artistTrack = tracks.find((t) => t.artists?.some((a: any) => a.id === artist.id));
                if (artistTrack) handlePlay(artistTrack);
              }}
            >
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
            <div
              className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out"
              onClick={() => {
                const albumTrack = tracks.find((t) => t.album?.id === album.id);
                if (albumTrack) handlePlay(albumTrack);
              }}
            >
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
            <div
              className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out"
              onClick={() => handlePlay(track)}
            >
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
      {currentTrack && <MusicPlayer track={currentTrack} />}
    </main>
  );
};

interface MusicPlayerProps {
  track: any;
}

const MusicPlayer: React.FC<MusicPlayerProps> = ({ track }) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const togglePlayPause = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const handleSeek = (e: ChangeEvent<HTMLInputElement>) => {
    const seekTime = parseFloat(e.target.value);
    if (audioRef.current) {
      audioRef.current.currentTime = seekTime;
    }
    setCurrentTime(seekTime);
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <div className="music-player fixed bottom-0 left-0 w-full z-50 bg-[#1A1A1A] text-white p-4 shadow-xl flex items-center justify-between">
      <div className="flex items-center gap-4">
        <img
          src={track.image ? `http://127.0.0.1:8000${track.image}` : anh}
          alt={track.title || "Album Cover"}
          className="w-16 h-16 rounded-md object-cover"
        />
        <div>
          <h3 className="font-semibold text-sm">{track.title || "Unknown Track"}</h3>
          <p className="text-xs text-gray-400">
            {track.artists && track.artists.length > 0 ? track.artists[0].name : "Unknown Artist"}
          </p>
        </div>
      </div>

      <div className="flex-1 flex flex-col items-center mx-4">
        <div className="flex items-center gap-4">
          <button
            onClick={togglePlayPause}
            className="p-3 rounded-full bg-green-500 hover:bg-green-600 transition-all duration-300 ease-in-out shadow-md hover:shadow-lg"
          >
            {isPlaying ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 9v6m4-6v6"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14.752 11.168l-5.197-3.027A1 1 0 008 9.027v5.946a1 1 0 001.555.832l5.197-3.027a1 1 0 000-1.71z"
                />
              </svg>
            )}
          </button>
        </div>
        <div className="w-full flex items-center mt-2">
          <span className="text-xs text-gray-400 mr-2">{formatTime(currentTime)}</span>
          <input
            type="range"
            min="0"
            max={duration || 0}
            value={currentTime}
            onChange={handleSeek}
            className="w-full accent-green-500"
          />
          <span className="text-xs text-gray-400 ml-2">{formatTime(duration)}</span>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button className="p-2 text-gray-400 hover:text-white transition">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
        <button className="p-2 text-gray-400 hover:text-white transition">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
      </div>

      <audio
        ref={audioRef}
        src={track.audio_file ? `http://127.0.0.1:8000${track.audio_file}` : ""}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={() => setIsPlaying(false)}
      />
    </div>
  );
};

export default Bodycontent;