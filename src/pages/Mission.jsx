import { Divider, Grid, Typography } from "@mui/material";
import { useState } from "react";
import { CardAchievement } from "../components/CardAchievement";
import { initialData } from "../helpers/initialData";
import { HeaderLayout } from "../layout/HeaderLayout";

export const Mission = () => {
  const [first, setfirst] = useState(initialData());

  // const handleSubmit = () => {
  //   const data = getArchiByName();
  //   setfirst([
  //     ...data,
  //     {
  //       name: "logro2",
  //       attributes: {
  //         description: "putos",
  //         complete: false,
  //         progress: 0,
  //         url: "image/url.png",
  //       },
  //     },
  //   ]);
  // };

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
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          alignContent="center"
          spacing={2}
          sx={{
            mt: 3,
          }}
        >
          {first.map((data) => {
            return <CardAchievement {...data} key={data.id} />;
          })}
        </Grid>
      </Grid>
    </HeaderLayout>
  );
};
