import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./parts/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Add from "./pages/Add";
import "./App.css";
function App() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<Add />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
