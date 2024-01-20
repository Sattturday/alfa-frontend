import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Test from "./components/Test/Test";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Routes>
        <Route path="/" element={<Test />} />
      </Routes>
    </div>
  );
}

export default App;
