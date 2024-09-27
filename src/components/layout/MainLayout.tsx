// src/components/layout/MainLayout.tsx
import React from "react";
import { Box, CssBaseline, Toolbar } from "@mui/material";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const drawerWidth = 240;

const MainLayout: React.FC = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          bgcolor: "background.default",
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar /> {/* Adds spacing */}
        {/* The Outlet renders the current route's component */}
        <Outlet />
      </Box>
    </Box>
  );
};

export default MainLayout;
