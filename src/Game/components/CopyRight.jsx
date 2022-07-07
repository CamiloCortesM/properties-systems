import { Typography } from "@mui/material";

export const CopyRight = () => {
    return (
        <Typography variant="body2" color="text.secondary" align="center" >
          {'Copyright © '}
          <span>
            TgsGames
          </span>{' '}
          {new Date().getFullYear()}
          {'.'}
        </Typography>
      );
}
