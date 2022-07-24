import React from "react";
import { MainPage } from "./components/MainPage/MainPage";
import Navbar from "./components/Navbar/Navbar";
import { SecondPage } from "./components/SecondPage/SecondPage";
import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/finduser/:user" element={<SecondPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
      ;
    </>
  );
}

export default App;
