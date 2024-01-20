import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Employee from "./pages/Employee/Employee";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Routes>
        <Route path="/" element={<Employee />} />
      </Routes>
    </div>
  );
}

export default App;
