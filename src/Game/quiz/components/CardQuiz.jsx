import {
  Card,
  CardContent,
  CardHeader,
  Grid,
  Toolbar,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { questions } from "../../../data/questions";
import { ButtonAnswer } from "./ButtonAnswer";

export const CardQuiz = () => {
    
    const [isFinished, setIsFinished] = useState(false);
    const [puntuación, setPuntuación] = useState(0);
    const [preguntaActual, setPreguntaActual] = useState(0);
    const [tiempoRestante, setTiempoRestante] = useState(25);
    const [areDisabled, setAreDisabled] = useState(false);

    const handleAnswerSubmit =()=>{
        if(preguntaActual == questions.length-1) return;

        setPreguntaActual(preguntaActual+1)
        setTiempoRestante(25);
    }

    useEffect(() => {
        const intervalo = setInterval(() => {
          if (tiempoRestante > 0) setTiempoRestante((prev) => prev - 1);
          if (tiempoRestante === 0) setAreDisabled(true);
        }, 1000);
    
        return () => clearInterval(intervalo);
      }, [tiempoRestante]);

  return (
    <Card
      sx={{
        width: "100%",
        m: "auto",
      }}
    >
      <CardHeader
        title={`${preguntaActual+1}/${questions.length}`}
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
              {questions[preguntaActual].tittle}
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
       
        {
            questions[preguntaActual].options.map((qt) =>
                (
                   <ButtonAnswer key={qt.textResponse} {...qt} handleAnswerSubmit={handleAnswerSubmit} disable={areDisabled}/>
                ))
        } 
        
        </Grid>
      </CardContent>
      <CardContent
        sx={{
          backgroundColor: "#ede7f6",
        }}
      >
        <Typography
          variant="body2"
          sx={{
            color: "primary",
          }}
        >
         Tiempo Restante: {tiempoRestante}
        </Typography>
      </CardContent>
    </Card>
  );
};
