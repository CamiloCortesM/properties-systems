import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import AbcIcon from "@mui/icons-material/Abc";
import VideogameAssetIcon from "@mui/icons-material/VideogameAsset";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import PersonIcon from "@mui/icons-material/Person";

export const MainListItems = () => {
  return (
    <>
      <ListItemButton>
        <ListItemIcon>
          <AbcIcon />
        </ListItemIcon>
        <ListItemText primary="Wordle" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <VideogameAssetIcon />
        </ListItemIcon>
        <ListItemText primary="Quiz" />
      </ListItemButton>
    </>
  );
};

export const SecondaryListItems = () => {
  return (
    <>
      <ListSubheader component="div" inset>
        Perfil
      </ListSubheader>
      <ListItemButton>
        <ListItemIcon>
          <EmojiEventsIcon />
        </ListItemIcon>
        <ListItemText primary="Misiones" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <PersonIcon />
        </ListItemIcon>
        <ListItemText primary="Perfil" />
      </ListItemButton>
    </>
  );
};
