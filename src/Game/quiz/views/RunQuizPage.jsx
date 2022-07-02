import { Button, Grid } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

export const RunQuizPage = ({ setRun }) => {
  return (
    <>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{
          minHeight: "calc(100vh - 110px)",
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
            width: { lg: "40vw",md: "50vw",sm: "60vw", xs: "70vw" },
            mb: 3,
          }}
        >
          <img
            width="100%"
            src="https://educacion30.b-cdn.net/wp-content/uploads/2019/06/homer.gif"
          ></img>
        </Grid>
        <Grid
          item
          xs={12}
          sx={{
            backgroundColor: "red",
          }}
        >
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
    </>
  );
};
