import { Link as RouterLink } from "react-router-dom";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import AbcIcon from "@mui/icons-material/Abc";
import VideogameAssetIcon from "@mui/icons-material/VideogameAsset";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import { Link } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";

export const MainListItems = () => {
  return (
    <>
      <ListSubheader component="div" inset>
        Juegos
      </ListSubheader>
      <Link
        component={RouterLink}
        color="inherit"
        to="/wordle"
        sx={{
          textDecoration: 0,
        }}
      >
        <ListItemButton>
          <ListItemIcon>
            <AbcIcon />
          </ListItemIcon>
          <ListItemText primary="Wordle" />
        </ListItemButton>
      </Link>
      <Link
        component={RouterLink}
        to="/quiz"
        color="inherit"
        sx={{
          textDecoration: 0,
        }}
      >
        <ListItemButton>
          <ListItemIcon>
            <VideogameAssetIcon />
          </ListItemIcon>
          <ListItemText primary="Quiz" />
        </ListItemButton>
      </Link>
    </>
  );
};

export const SecondaryListItems = () => {
  return (
    <>
      <Link
        component={RouterLink}
        to="/mission"
        color="inherit"
        sx={{
          textDecoration: 0,
        }}
      >
        <ListItemButton>
          <ListItemIcon>
            <EmojiEventsIcon />
          </ListItemIcon>
          <ListItemText primary="Logros" />
        </ListItemButton>
      </Link>
      <Link
        href="https://github.com/CamiloCortesM/tgs-games"
        color="inherit"
        sx={{
          textDecoration: 0,
        }}
      >
        <ListItemButton>
          <ListItemIcon>
            <GitHubIcon />
          </ListItemIcon>
          <ListItemText primary="Github" />
        </ListItemButton>
      </Link>
    </>
  );
};
