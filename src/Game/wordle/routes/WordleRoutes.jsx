import { Navigate, Route, Routes } from "react-router-dom";
import { Wordle } from "../pages/Wordle";

export const WordleRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Wordle />} />
      <Route path="/*" element={<Navigate to="/wordle" />} />
    </Routes>
  );
};
