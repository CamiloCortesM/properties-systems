import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Grid,
  Link,
  Toolbar,
  Typography,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import { questions } from "../../../data/questions";
import { ButtonAnswer } from "./ButtonAnswer";
import { ProgressBar } from "react-bootstrap";
import { getUrlMedal } from "../../../helpers/getUrlMedal";

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
      <Grid
        item
        container
        alignItems="center"
        justifyContent="center"
        sx={{
          minHeight: "calc(100vh - 110px)",
        }}
      >
        <Card sx={{ maxWidth: 750, m: "auto" }}>
          <CardContent>
            {score === 10 ? (
              <Typography gutterBottom variant="h5" component="div">
                Felicitaciones Camilo! 🥳
              </Typography>
            ) : score > 4 && score < 10 ? (
              <Typography gutterBottom variant="h5" component="div">
                Puedes Hacerlo Mejor Camilo! 😁
              </Typography>
            ) : (
              <Typography gutterBottom variant="h5" component="div">
                Ups Vuelve a intentarlo Camilo 😰
              </Typography>
            )}

            <Grid container spacing={2}>
              <Grid item xs={8}>
                {score === 10 ? (
                  <Typography variant="body2" color="text.secondary">
                    Se obtuvo el maximo puntaje esperado, Todas las respuestas
                    fueron correctas
                  </Typography>
                ) : score > 4 && score < 10 ? (
                  <Typography variant="body2" color="text.secondary">
                    No estuvo mal pero se puede mejorar vuelve a intentarlo para
                    obetener un mejor puntaje
                  </Typography>
                ) : (
                  <Typography variant="body2" color="text.secondary">
                    oh no, tu puntaje fue bajo vuelve a intentarlo y refuerza
                    tus conocimientos, puedes hacerlo mejor!!
                  </Typography>
                )}
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    mt: 2,
                  }}
                >
                  {score}/10
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <img width="100%" src={url}></img>
              </Grid>
            </Grid>
          </CardContent>
          <CardActions>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => {
                setRun(false)
              }}
            >
              Volver a Jugar
            </Button>
            <Button variant="contained" color="secondary">
              {" "}
              <Link
                component={RouterLink}
                to="/mission"
                underline="none"
                color="inherit"
                sx={{
                  "&:hover": {
                    textDecoration: "none",
                    color: "white",
                  },
                }}
              >
                Logros
              </Link>{" "}
            </Button>
          </CardActions>
        </Card>
      </Grid>
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
