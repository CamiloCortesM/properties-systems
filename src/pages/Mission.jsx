import { Grid } from "@mui/material";
import { HeaderLayout } from "../layout/HeaderLayout";

export const Mission = () => {
  return (
    <HeaderLayout>
      <Grid
        container
        direction="row"
        sx={{
          p: 2,
        }}
      >
        <Grid item xs={6} md={3} sx={{
            mt:2
        }}>
          hola
        </Grid>
      </Grid>
    </HeaderLayout>
  );
};
