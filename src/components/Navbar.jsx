import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import { Route, Routes } from "react-router-dom";
import Landing from "../pages/Landing";
import Sidebar from "./Sidebar";

const drawerWidth = "70px";

function ResponsiveDrawer(props) {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      <AppBar
        position="fixed"
        sx={{
          display: { md: "none" },
          backgroundColor: "#F3F6FA",
        }}
      >
        <Toolbar disableGutters />
      </AppBar>

      <Box
        component="nav"
        sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          PaperProps={{
            sx: {
              backgroundColor: "#F3F6FB",
              border: "none",
              boxShadow: "2px 2px 50px 8px rgba(0,0,0,0.2)",
            },
          }}
          variant="permanent"
          sx={{
            display: { xs: "none", md: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          <Sidebar />
        </Drawer>
      </Box>

      {/* Content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 0,
          width: { md: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar sx={{ display: { md: "none" } }} />
        <Routes>
          <Route exact path="/" element={<Landing />} />
        </Routes>
      </Box>
    </Box>
  );
}

export default ResponsiveDrawer;
