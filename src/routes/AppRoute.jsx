import React from "react";
import { Routes, Route } from "react-router-dom";
import { Quiz} from "../pages/Quiz";
import { Wordle } from "../pages/Wordle";

export const AppRoute = () => {
  return (
    <Routes>
      <Route path="/crossword" element={<Quiz />} />

      <Route path="/wordle" element={<Wordle />} />

      <Route path="/*" element={<Wordle />} />
    </Routes>
  );
};
