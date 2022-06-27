import { Navigate, Route, Routes } from "react-router-dom";
import { Quiz } from "../pages/Quiz";

export const QuizRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Quiz />} />
      <Route path="/*" element={<Navigate to="/quiz" />} />
    </Routes>
  );
};
