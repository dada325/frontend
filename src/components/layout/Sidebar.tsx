// src/components/layout/Sidebar.tsx
import React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  Divider,
  IconButton,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import {
  Home,
  Dashboard,
  Build,
  Sync,
  Storage,
  AdminPanelSettings,
  Settings,
  Menu,
} from "@mui/icons-material";
import { Link, useLocation } from "react-router-dom";

const drawerWidth = 240;

interface NavItem {
  text: string;
  icon: React.ReactElement;
  path: string;
}

const navItems: NavItem[] = [
  { text: "Home", icon: <Home />, path: "/" },
  { text: "Dashboard", icon: <Dashboard />, path: "/dashboard" },
  { text: "Pipeline Builder", icon: <Build />, path: "/builder" },
  { text: "Running Pipelines", icon: <Sync />, path: "/running" },
  { text: "Database", icon: <Storage />, path: "/database" },
  { text: "Admin", icon: <AdminPanelSettings />, path: "/admin" },
  { text: "Settings", icon: <Settings />, path: "/settings" },
];

const Sidebar: React.FC = () => {
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar>
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{ display: "flex", alignItems: "center" }}
        >
          <Build /> {/* Replace with your desired MUI icon */}
          &nbsp; PipelineApp
        </Typography>
      </Toolbar>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton
              component={Link}
              to={item.path}
              selected={location.pathname === item.path}
              sx={{
                "&.Mui-selected": {
                  backgroundColor: "primary.main",
                  color: "white",
                  "& .MuiListItemIcon-root": {
                    color: "white",
                  },
                },
                "&.Mui-selected:hover": {
                  backgroundColor: "primary.dark",
                },
              }}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <>
      {isMobile && (
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ position: "fixed", top: 10, left: 10, zIndex: 1300 }}
        >
          <Menu />
        </IconButton>
      )}
      {/* Temporary Drawer for Mobile */}
      <Drawer
        variant={isMobile ? "temporary" : "permanent"}
        open={isMobile ? mobileOpen : true}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", sm: "block" },
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Sidebar;
