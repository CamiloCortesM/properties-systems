import { Button, Divider, Grid, Typography } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

export const RunQuizPage = ({ setRun }) => {
  return (
    <>
      <Grid
        container
        sx={{
          p: 2,
        }}
      >
        <Grid
          item
          xs={12}
          md={12}
          sx={{
            mt: 2,
          }}
        >
          <Typography
            component="h3"
            variant="strong"
            sx={{
              textAlign: "center",
              textTransform: "capitalize",
            }}
          >
            Quiz propiedades de los sistemas
          </Typography>
          <Divider />
        </Grid>
        <Grid
          item
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justifyContent="center"
          sx={{
            minHeight: "calc(100vh - 200px)",
            padding: 4,
            borderRadius: 3,
          }}
        >
          <Grid
            item
            container
            alignItems="center"
            justifyContent="center"
            sx={{
              width: { lg: "30vw", md: "40vw", sm: "50vw", xs: "60vw" },
              mb: 3,
            }}
          >
            <img
              width="100%"
              src="https://c.tenor.com/SxJzwBeWoasAAAAC/good-luck-sponge-bob.gif"
              style={{
                marginBottom:10
              }}
            ></img>

            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                setRun(true);
              }}
            >
              <PlayArrowIcon />
              Empezar
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
