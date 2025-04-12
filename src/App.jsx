import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Live_Match_Detail from "./components/Live_Match";
const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" index element={<Home/>} />
          <Route path="/live_match/:id" element={<Live_Match_Detail/>} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
