import React from "react";
import { Routes, Route } from "react-router-dom";
import { Mission } from "../Game/mission/pages/Mission";
import { Quiz } from "../Game/quiz/pages/Quiz";
import { Wordle } from "../Game/wordle/pages/Wordle";

export const AppRoute = () => {
  return (
    <Routes>
      <Route path="/quiz" element={<Quiz />} />

      <Route path="/wordle" element={<Wordle />} />

      <Route path="/mission" element={<Mission />} />

      <Route path="/*" element={<Wordle />} />
    </Routes>
  );
};
