import { Divider, Grid, Typography } from "@mui/material";
import { CardAchievement } from "../components/CardAchievement";
import { HeaderLayout } from "../../layout/HeaderLayout";
import { useContext } from "react";
import { ContextArchi } from "../../../hooks/ContextArchi";


export const Mission = () => {
  
const {first} = useContext(ContextArchi)
console.log(first)
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
