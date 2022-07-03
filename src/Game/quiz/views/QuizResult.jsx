import {
    Button,
    Card,
    CardActions,
    CardContent,
    Grid,
    Link,
    Typography,
  } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

export const QuizResult = ({score,url,setRun}) => {
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
  )
}
