import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Addperson from "./pages/AddPerson";
import Home from "./pages/Home";
import EditPerson from "./pages/EditPerson";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Add-person" element={<Addperson />} />
        <Route path="/edit-person/:personId" element={<EditPerson />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
