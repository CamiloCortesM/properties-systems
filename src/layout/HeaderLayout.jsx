import { Toolbar } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { Navbar } from "../components/Navbar";
import { SideBar } from "../components/SideBar";

const drawerWidth = 240;

export const HeaderLayout = ({ children }) => {
  const [open, setOpen] = useState(true);

  const toggleDrawer = () => {
    setOpen(!open);
  };
  return (
    <Box sx={{ display: "flex" }}>
      <Navbar
        drawerWidth={drawerWidth}
        toggleDrawer={toggleDrawer}
        open={open}
      />

      <SideBar
        toggleDrawer={toggleDrawer}
        open={open}
      />

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};
