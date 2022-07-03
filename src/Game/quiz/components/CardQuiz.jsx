import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Grid,
  Toolbar,
  Typography,
} from "@mui/material";
import { useEffect, useMemo, useState } from "react";
import { questions } from "../../../data/questions";
import { ButtonAnswer } from "./ButtonAnswer";
import { ProgressBar } from "react-bootstrap";
import { getUrlMedal } from "../../../helpers/getUrlMedal";
import { QuizResult } from "../views/QuizResult";

export const CardQuiz = ({setRun}) => {
  const [isFinished, setIsFinished] = useState(false);
  const [score, setScore] = useState(0);
  const [questionCurrent, setQuestionCurrent] = useState(0);
  const [timeRestant, setTimeRestant] = useState(25);
  const [areDisabled, setAreDisabled] = useState(false);
  const [color, setColor] = useState({});

  const url = useMemo(() => getUrlMedal(score), [score]);

  const handleAnswerSubmit = (isCorrect, e) => {
    if (isCorrect && !areDisabled) {
      setScore(score + 1);
      setColor({
        [e.target.name]: "success",
      });
    } else if (!areDisabled) {
      setColor({
        [e.target.name]: "error",
      });
    }
    setAreDisabled(true);

    setTimeout(() => {
      setAreDisabled(false);
      setTimeRestant(25);
      questionCurrent == questions.length - 1
        ? setIsFinished(true)
        : setQuestionCurrent(questionCurrent + 1);
    }, 1500);
  };

  useEffect(() => {
    if (!isFinished) {
      const intervalo = setInterval(() => {
        if (timeRestant > 0) setTimeRestant((prev) => prev - 1);
        if (timeRestant === 0) setAreDisabled(true);
      }, 1000);

      return () => clearInterval(intervalo);
    }
  }, [timeRestant, isFinished]);

  if (isFinished)
    return (
      <QuizResult setRun={setRun} score={score} url={url}/>
    );

  return (
    <Card
      sx={{
        width: "100%",
        m: "auto",
      }}
    >
      <CardHeader
        title={`${questionCurrent + 1}/${questions.length}`}
        sx={{
          backgroundColor: "#ede7f6",
        }}
      />

      <CardContent
        sx={{
          backgroundColor: "#ede7f6",
        }}
      >
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          direction="column"
        >
          <Toolbar
            sx={{
              height: 200,
            }}
          >
            <Typography variant="h6" color="primary">
              {questions[questionCurrent].tittle}
            </Typography>
          </Toolbar>
        </Grid>
      </CardContent>
      <CardContent
        sx={{
          backgroundColor: "#ede7f6",
        }}
      >
        <Grid container direction="row" spacing={1}>
          {questions[questionCurrent].options.map((qt) => (
            <ButtonAnswer
              key={qt.textResponse}
              {...qt}
              color={color}
              handleAnswerSubmit={handleAnswerSubmit}
              disable={areDisabled}
            />
          ))}
        </Grid>
      </CardContent>
      <CardContent
        sx={{
          backgroundColor: "#ede7f6",
        }}
      >
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid container item xs={8} justifyContent={"start"}></Grid>
          {timeRestant === 0 && (
            <Grid container item xs={4} justifyContent={"end"}>
              <Button
                onClick={() => {
                  setTimeRestant(25);
                  setAreDisabled(false);
                  questionCurrent == questions.length - 1
                    ? setIsFinished(true)
                    : setQuestionCurrent(questionCurrent + 1);
                }}
              >
                Continuar
              </Button>
            </Grid>
          )}
        </Grid>
        <div>
          <ProgressBar
            striped
            variant={(timeRestant / 25) * 100 < 20 ? "danger" : "success"}
            animated
            now={(timeRestant / 25) * 100}
          />
        </div>
      </CardContent>
    </Card>
  );
};
