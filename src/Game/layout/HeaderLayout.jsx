import { Toolbar } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { CopyRight, Navbar, SideBar } from "../components";

const drawerWidth = 240;

export const HeaderLayout = ({ children }) => {
  const [open, setOpen] = useState(false);

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

      <SideBar toggleDrawer={toggleDrawer} open={open} />

      <Box
        component="main"
        sx={{
          backgroundColor: "primary.main",
          flexGrow: 1,
          height: "100vh",
          overflow: "auto",
        }}
      >
        <Toolbar />
        {children}
        <CopyRight />
      </Box>
    </Box>
  );
};
