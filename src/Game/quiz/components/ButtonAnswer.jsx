import { Button, Grid } from "@mui/material";

export const ButtonAnswer = ({
  textResponse,
  isCorrect,
  handleAnswerSubmit,
  disable
}) => {
  return (
    <Grid item lg={6} md={6} sm={6} xs={12}>
      <Button
        variant="contained"
        color="primary"
        disabled={disable}
        fullWidth
        onClick={(e) => handleAnswerSubmit(isCorrect, e)}
        sx={{
          height: { lg: 100, md: 80, sm: 60, xs: 50 },
        }}
      >
        {textResponse}
      </Button>
    </Grid>
  );
};
