import React from "react";
import './SideBar.scss';
import { useNavigate, Link, NavLink } from "react-router-dom";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import { FiMenu } from "react-icons/fi";
import { HiHome } from "react-icons/hi";
import {
  FaUserGraduate,
  FaUserFriends,
  FaUserTie,
  FaChartPie,
  FaCog,
} from "react-icons/fa";
import { IoMailUnreadOutline, IoMailOutline } from "react-icons/io5";
import SearchBar from "./Search/SearchBar";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const Sidebar = () => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar className="appbar-sidebar" position="fixed" open={open}>
          <Toolbar className="appbar-toolbar">
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{
                marginRight: 5,
                ...(open && { display: "none" }),
              }}
              className="appbar-icon-button"
            >
              <FiMenu className="appbar-icon-hambuger" />
            </IconButton>
            <SearchBar style={{ justifyContent: "flex-end" }} />
          </Toolbar>
        </AppBar>
        <Drawer className="drawer-header" variant="permanent" open={open}>
          <DrawerHeader className="drawer-header-sidebar">
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "rtl" ? (
                <BsChevronRight />
              ) : (
                <BsChevronLeft />
              )}
            </IconButton>
          </DrawerHeader>
          <List className="sidebar-menu">
            <NavLink
              className="sidebar-link"
              activeClassName="active"
              to="/dashboard"
            >
              <ListItem
                disablePadding
                sx={{ display: "block" }}
                onClick={() => {
                  navigate("/dashboard");
                }}
                className="sidebar-link-item"
              >
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                  }}
                  className="sidebar-item-button"
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                    className="sidebar-item-icon"
                  >
                    <HiHome className="icons" />
                  </ListItemIcon>
                  <ListItemText
                    className="sidebar-link sidebar-text"
                    primary="Dashboard"
                    sx={{ opacity: open ? 1 : 0 }}
                  />
                </ListItemButton>
              </ListItem>
            </NavLink>

            <Link className="sidebar-link" to="/student">
              <ListItem
                disablePadding
                sx={{ display: "block" }}
                onClick={() => {
                  navigate("/student");
                }}
                className="sidebar-link-item"
              >
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                  }}
                  className="sidebar-item-button"
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                    className="sidebar-item-icon"
                  >
                    <FaUserGraduate className="icons" />
                  </ListItemIcon>
                  <ListItemText
                    className="sidebar-link sidebar-text"
                    primary="Student"
                    sx={{ opacity: open ? 1 : 0 }}
                  />
                </ListItemButton>
              </ListItem>
            </Link>

            <Link className="sidebar-link" to="/parent">
              <ListItem
                disablePadding
                sx={{ display: "block" }}
                onClick={() => {
                  navigate("/parent");
                }}
                className="sidebar-link-item"
              >
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                  }}
                  className="sidebar-item-button"
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                    className="sidebar-item-icon"
                  >
                    <FaUserFriends className="icons" />
                  </ListItemIcon>
                  <ListItemText
                    className="sidebar-link sidebar-text"
                    primary="Parent"
                    sx={{ opacity: open ? 1 : 0 }}
                  />
                </ListItemButton>
              </ListItem>
            </Link>

            <Link className="sidebar-link" to="/teacher">
              <ListItem
                disablePadding
                sx={{ display: "block" }}
                onClick={() => {
                  navigate("/teacher");
                }}
                className="sidebar-link-item"
              >
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                  }}
                  className="sidebar-item-button"
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                    className="sidebar-item-icon"
                  >
                    <FaUserTie className="icons" />
                  </ListItemIcon>
                  <ListItemText
                    className="sidebar-link sidebar-text"
                    primary="Teacher"
                    sx={{ opacity: open ? 1 : 0 }}
                  />
                </ListItemButton>
              </ListItem>
            </Link>

            <Link className="sidebar-link" to="/statistic">
              <ListItem
                disablePadding
                sx={{ display: "block" }}
                onClick={() => {
                  navigate("/statistic");
                }}
                className="sidebar-link-item"
              >
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                  }}
                  className="sidebar-item-button"
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                    className="sidebar-item-icon"
                  >
                    <FaChartPie className="icons" />
                  </ListItemIcon>
                  <ListItemText
                    className="sidebar-link sidebar-text"
                    primary="Statistic"
                    sx={{ opacity: open ? 1 : 0 }}
                  />
                </ListItemButton>
              </ListItem>
            </Link>

            <Link className="sidebar-link" to="/setting">
              <ListItem
                disablePadding
                sx={{ display: "block" }}
                onClick={() => {
                  navigate("/setting");
                }}
                className="sidebar-link-item"
              >
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                  }}
                  className="sidebar-item-button"
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                    className="sidebar-item-icon"
                  >
                    <FaCog className="icons" />
                  </ListItemIcon>
                  <ListItemText
                    className="sidebar-link sidebar-text"
                    primary="Setting"
                    sx={{ opacity: open ? 1 : 0 }}
                  />
                </ListItemButton>
              </ListItem>
            </Link>
          </List>
          {/* <Divider />
          <Divider /> */}
        </Drawer>
      </Box>
    </div>
  );
};

export default Sidebar;
