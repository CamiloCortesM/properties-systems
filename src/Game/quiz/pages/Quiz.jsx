import { useState } from "react";
import { HeaderLayout } from "../../layout/HeaderLayout";
import { QuizView } from "../views/QuizView";
import { RunQuizPage } from "../views/RunQuizPage";

export const Quiz = () => {
  const [Run, setRun] = useState(false);
  return (
    <HeaderLayout>
      {Run ? <QuizView setRun={setRun} /> : <RunQuizPage setRun={setRun} />}
    </HeaderLayout>
  );
};
