import { Button, Grid} from "@mui/material";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

export const RunQuizPage = () => {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{
        minHeight: "calc(100vh - 110px)",
        backgroundColor: "primary.main",
        padding: 4,
        borderRadius: 3,
      }}
    >
      <Grid item xs={12}>
        <Button variant="contained" color="secondary">
            <PlayArrowIcon />
            Empezar
        </Button>
      </Grid>
    </Grid>
  );
};
