import React from "react";
import { Routes, Route } from "react-router-dom";
import { Quiz, Mission, Wordle } from "../pages";

export const AppRoute = () => {
  return (
    <Routes>
      <Route path="/quiz" element={<Quiz />} />

      <Route path="/wordle" element={<Wordle />} />

      

      <Route path="/Mission" element={<Mission />} />

      <Route path="/*" element={<Wordle />} />
    </Routes>
  );
};
