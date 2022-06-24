import React from "react";
import { Routes, Route } from "react-router-dom";
import { CrossWord } from "../pages/CrossWord";
import { Wordle } from "../pages/Wordle";

export const AppRoute = () => {
  return (
    <Routes>
      <Route path="/crossword" element={<CrossWord />} />

      <Route path="/wordle" element={<Wordle />} />

      <Route path="/*" element={<Wordle />} />
    </Routes>
  );
};
