import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home/HomePage/HomePage';
import ProtectedRoute from "./components/ProtectedRoute";
import "./";
function App() {
  return (
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<h1>404 - Không tìm thấy trang</h1>} />
      </Routes>
  )
}

export default App;
