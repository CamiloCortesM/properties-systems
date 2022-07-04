import { Grid } from "@mui/material";
import BackspaceIcon from '@mui/icons-material/Backspace';
import { useEffect,useState } from "react";

export const Box = (props) => {

  const [style, setStyle] = useState({
    borderRadius:"0.25rem",
    color:"rgb(0 0 0)",
    border:"solid rgb(209 213 219) 2px",
    backgroundColor:"white"
  })

  useEffect(() => {
    setTimeout(() => {
      if (props.state === "C")
        setStyle({
          color:"white",
          backgroundColor:"green",
          borderRadius:"0.125rem"
        });
      if (props.state === "E")
      setStyle({
        color:"white",
        backgroundColor:"yellow",
        borderRadius:"0.125rem"
      });
      if (props.state === "N")
         setStyle({
          color:"white",
          backgroundColor:"grey",
          borderRadius:"0.125rem"
        });
    }, 125 * props.pos);
  }, [props.state])


  return (
    <Grid
      item
      alignItems="center"
      justifyItems="center"
      sx={{
        height: { xs: "35px", sm: "56px" },
        width: { xs: "35px", sm: "56px" },
        p: 0,
        m: 0,
        fontWeight: "bold",
        fontSize: "1.5rem",
        ...style,
      }}
    >
      {props.value === "DEL" ? <BackspaceIcon /> : props.value}
    </Grid>
  );
};
