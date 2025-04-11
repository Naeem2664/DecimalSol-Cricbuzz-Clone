import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages";
const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/live_matches" element={<h1>Live Matches</h1>} />
          <Route path="/upcoming_matches" element={<h1>Contact</h1>} />
          <Route path="/upcoming_series" element={<h1>Products</h1>} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
