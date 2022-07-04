import { Divider, Typography } from "@mui/material";
import { Box } from "@mui/system";

export const HeaderWordle = () => {
  return (
    <Box textAlign="center" sx={{
        m:3
    }}>
      <Typography component="h1" sx={{
        fontWeight: "bold",
        fontSize:"1.6rem"
      }}>WORDLE</Typography>
      <Divider />
    </Box>
  );
};
