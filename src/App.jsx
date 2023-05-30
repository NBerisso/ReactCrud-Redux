import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateUser from "./components/CreateUser";
import Update from "./components/Update";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/CreateUser" element={<CreateUser />}></Route>
        <Route path="/edit/:id" element={<Update />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
