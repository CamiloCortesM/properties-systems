import { BrowserRouter } from "react-router-dom";
import { AppRoute } from "./routes/AppRoute";
import { AppTheme } from "./theme";

export const SystemGame = () => {
  return (
    <BrowserRouter>
      <AppTheme>
        <AppRoute />
      </AppTheme>
    </BrowserRouter>
  );
};
