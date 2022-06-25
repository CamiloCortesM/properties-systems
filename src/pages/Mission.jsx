import { Divider, Grid, Typography } from "@mui/material";
import { CardAchievement } from "../components/CardAchievement";
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
        <Grid
          item
          xs={12}
          md={12}
          sx={{
            mt: 2,
          }}
        >
          <Typography
            component="h1"
            variant="strong"
            sx={{
              textAlign: "center",
              textTransform: "capitalize",
            }}
          >
            LOGROS
          </Typography>
          <Divider />
        </Grid>
        <Grid container 
        justifyContent="space-around"
        alignItems="center" sx={{
          mt:3
        }}
        >
          <Grid xs={12} md={3} item>
              <CardAchievement />
          </Grid>
        </Grid>
      </Grid>
    </HeaderLayout>
  );
};
