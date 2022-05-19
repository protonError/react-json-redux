import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./parts/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Add from "./pages/Add";
import Contact from "./pages/Contact";
import "./App.css";
function App() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<Add />} />
          <Route path="/contactus" element={<Contact />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
