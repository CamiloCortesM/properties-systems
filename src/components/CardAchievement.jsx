import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Grid } from "@mui/material";
import image from "../assets/logro.jpg";

export const CardAchievement = ({ name, attributes }) => {
  const { description, progress } = attributes;

  return (
    <Grid lg={2} md={3} sm={4} xs={6} item>
      <Card sx={{ maxWidth: 345, m: "auto", height:{lg:320, md:300, sm:320, xs:365} }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={image}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" >
              {name}
            </Typography>
            <Typography
              variant="body2"
              component="p"
              sx={{
                mb: 1,
              }}
            >
              {description}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {progress}%
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};
