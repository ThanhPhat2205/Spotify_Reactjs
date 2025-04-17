
npm create vite@latest fontend -- --template react-ts

cd vào dự án: cd fontend

*Cài đặc Tailwind css :
npm install -D tailwindcss@3.4.17 postcss autoprefixer

*Cấu hình tailwind css:
npx tailwindcss init -p

-Mở file src/index.css và thêm các directive sau:
@tailwind base;
@tailwind components;
@tailwind utilities;

Mở file tailwind.config.js, cập nhật nội dung như sau:
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};

**npm run dev** để chạy dự án
