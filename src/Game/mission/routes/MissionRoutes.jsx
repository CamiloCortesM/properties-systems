import { Navigate, Route, Routes } from "react-router-dom";
import { Mission } from "../pages/Mission";

export const MissionRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Mission />} />
      <Route path="/*" element={<Navigate to="/mission" />} />
    </Routes>
  );
};
