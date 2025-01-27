import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import Tentang from "./pages/Tentang";
import Surah from "./pages/Surah";
import Sholat from "./pages/Sholat";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/surah/:idSurah" element={<Surah />} />
        <Route path="/jadwal-sholat" element={<Sholat />} />
        <Route path="/tentang" element={<Tentang />} />
      </Routes>
    </>
  );
}

export default App;
