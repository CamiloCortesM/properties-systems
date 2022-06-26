import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Grid,
  Toolbar,
  Typography,
} from "@mui/material";
import { HeaderLayout } from "../layout/HeaderLayout";

export const Quiz = () => {
  return (
    <HeaderLayout>
      <Grid
        container
        direction="row"
        sx={{
          p: 2,
        }}
      >
        <Grid xs={12} item>
          <Card
            sx={{
              width: "100%",
              m: "auto",
            }}
          >
            <CardHeader title="1/5" sx={{
              backgroundColor:"#ede7f6",
            }} />
            <CardContent
              sx={{
                backgroundColor: "#ede7f6",
              }}
            >
              <Grid
                container
                justifyContent="center"
                alignItems="center"
                direction="column"
              >
                <Toolbar sx={{
                  height:200
                }}>
                  <Typography
                    variant="h6"
                    color="primary"
                  >
                    ¿Esta es la preguntaasda sdsadasdsada sdadas dasdasd?
                  </Typography>
                </Toolbar>
              </Grid>
            </CardContent>
            <CardContent
              sx={{
                backgroundColor: "#ede7f6",
              }}
            >
              <Grid container direction="row" spacing={1}>
                <Grid item lg={6} >
                  <Button variant="contained" color="primary" fullWidth sx={{
                    height:100
                  }}>
                    sadsa
                  </Button>
                </Grid>
                <Grid item lg={6}>
                  <Button variant="contained" color="primary" fullWidth sx={{
                    height:100
                  }}>
                    sadsa
                  </Button>
                </Grid>
                <Grid item lg={6}>
                  <Button variant="contained" color="primary" fullWidth sx={{
                    height:100
                  }}>
                    sadsa
                  </Button>
                </Grid>
                <Grid item lg={6}>
                  <Button variant="contained" color="primary" fullWidth sx={{
                    height:100
                  }}>
                    sadsa
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
            <CardContent
              sx={{
                backgroundColor: "#ede7f6",
              }}
            >
              <Typography
                variant="body2"
                sx={{
                  color: "primary",
                }}
              >
                Hola
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </HeaderLayout>
  );
};
