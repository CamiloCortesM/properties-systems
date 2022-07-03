import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { initialData } from "./helpers/initialData";
import { ContextArchi } from "./hooks/ContextArchi";
import { AppRoute } from "./routes/AppRoute";
import { AppTheme } from "./theme";

export const SystemGame = () => {

  const [first, setfirst] = useState(initialData());

  return (
    <ContextArchi.Provider value={{first}}>
    <BrowserRouter>
      <AppTheme>
        <AppRoute />
      </AppTheme>
    </BrowserRouter>
    </ContextArchi.Provider>
  );
};
