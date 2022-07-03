import {
  Grid,
} from "@mui/material";
import { CardQuiz } from "../components/CardQuiz";

export const QuizView = ({setRun}) => {

  return (
    <Grid
      container
      direction="row"
      sx={{
        p: 2,
      }}
    >
      <Grid xs={12} item>
        <CardQuiz setRun={setRun}/>
      </Grid>
    </Grid>
  );
};
