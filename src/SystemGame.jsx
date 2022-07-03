import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { initialData } from "./helpers/initialData";
import { ContextArchi } from "./hooks/ContextArchi";
import { AppRoute } from "./routes/AppRoute";
import { AppTheme } from "./theme";

const init = () => {
  return JSON.parse(localStorage.getItem("achievements")) || initialData();
};

export const SystemGame = () => {
  const [achvt, setAchvt] = useState(init);


  useEffect(() => {
    localStorage.setItem("achievements", JSON.stringify(achvt));
  }, [achvt]);

  return (
    <ContextArchi.Provider value={{ achvt, setAchvt }}>
      <BrowserRouter>
        <AppTheme>
          <AppRoute />
        </AppTheme>
      </BrowserRouter>
    </ContextArchi.Provider>
  );
};
