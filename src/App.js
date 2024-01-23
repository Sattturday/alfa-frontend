import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Employee from "./pages/Employee/Employee";
import TaskCard from "./components/TaskCard/TaskCard";

function App() {
  return (
    <div className="wrapper">
      {/* <Header />
      <Routes>
        <Route path="/" element={<Employee />} />
      </Routes> */}
      <TaskCard />
    </div>
  );
}

export default App;
