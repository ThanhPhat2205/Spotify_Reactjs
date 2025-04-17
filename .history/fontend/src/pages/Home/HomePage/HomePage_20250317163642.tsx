const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      {/* Header */}
      <header className="flex items-center justify-between p-5">
        <div className="logo">
          {/* Thay bằng logo thật của bạn */}
          <img src="/spotify-logo.png" alt="Spotify Logo" className="h-10" />
        </div>
        <nav className="space-x-4">
          <a href="/" className="hover:text-green-500">Trang chủ</a>
          <a href="/search" className="hover:text-green-500">Tìm kiếm</a>
          <a href="/library" className="hover:text-green-500">Thư viện</a>
        </nav>
        <div className="user-profile">
          <img
            src="https://via.placeholder.com/40"
            alt="User"
            className="rounded-full"
          />
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex items-center justify-center h-[60vh] bg-gradient-to-r from-green-500 to-black text-center p-5">
        <div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Chào mừng đến với Spotify
          </h1>
          <p className="text-xl md:text-2xl mb-6">
            Khám phá âm nhạc yêu thích của bạn
          </p>
          <button className="px-6 py-3 bg-green-500 rounded-full text-white text-lg transition-colors hover:bg-green-600">
            Nghe ngay
          </button>
        </div>
      </section>

      {/* Featured Playlists */}
      <section className="p-8">
        <h2 className="text-3xl font-semibold mb-6">Playlist nổi bật</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <div className="bg-gray-800 p-4 rounded-lg hover:scale-105 transition-transform">
            <img
              src="https://via.placeholder.com/200"
              alt="Playlist Chill"
              className="w-full rounded-lg"
            />
            <h3 className="mt-4 text-xl">Nhạc Chill</h3>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg hover:scale-105 transition-transform">
            <img
              src="https://via.placeholder.com/200"
              alt="Top Hits"
              className="w-full rounded-lg"
            />
            <h3 className="mt-4 text-xl">Top Hits</h3>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg hover:scale-105 transition-transform">
            <img
              src="https://via.placeholder.com/200"
              alt="Workout Mix"
              className="w-full rounded-lg"
            />
            <h3 className="mt-4 text-xl">Workout Mix</h3>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg hover:scale-105 transition-transform">
            <img
              src="https://via.placeholder.com/200"
              alt="Tập trung"
              className="w-full rounded-lg"
            />
            <h3 className="mt-4 text-xl">Tập trung</h3>
          </div>
        </div>
      </section>
    </div>
  );
};
  
  export default Homepage;