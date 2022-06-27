import React from "react";
import { Routes, Route } from "react-router-dom";
import { MissionRoutes } from "../Game/mission/routes/MissionRoutes";
import { QuizRoutes } from "../Game/quiz/routes/quizRoutes";
import { WordleRoutes } from "../Game/wordle/routes/WordleRoutes";

export const AppRoute = () => {
  return (
    <Routes>
      <Route path="/quiz/*" element={<QuizRoutes />} />

      <Route path="/wordle/*" element={<WordleRoutes />} />

      <Route path="/mission/*" element={<MissionRoutes />} />

      <Route path="/*" element={<WordleRoutes />} />
    </Routes>
  );
};
