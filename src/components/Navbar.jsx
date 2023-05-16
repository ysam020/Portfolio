import React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { Route, Routes } from "react-router-dom";
import Landing from "../pages/Landing";
import Sidebar from "./Sidebar";

const drawerWidth = "70px";

function ResponsiveDrawer() {
  return (
    <Box sx={{ display: "flex" }}>
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
          width: { md: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Routes>
          <Route exact path="/" element={<Landing />} />
        </Routes>
      </Box>
    </Box>
  );
}

export default ResponsiveDrawer;
