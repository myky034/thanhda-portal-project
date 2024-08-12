import React, { useState } from "react";
import "./SideBar.scss";
import { useNavigate, NavLink } from "react-router-dom";
import logo_sidebar from "../../assets/images/logo-sidebar.png";
import { styled, useTheme } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import IconButton from "@mui/material/IconButton";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import {
  TbTemplate,
  TbCertificate,
  TbChartDonut,
  TbSettings,
  TbUsers,
  TbUserCircle,
  TbLayoutDashboard,
  TbBellRinging,
} from "react-icons/tb";
import Avatar from "@mui/material/Avatar";
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

function stringToColor(string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = "#";

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}

function stringAvatar(name) {
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
  };
}

const Sidebar = () => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  const navigate = useNavigate();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <CssBaseline />
      <AppBar
        className='appbar-sidebar'
        position='fixed'
        open={open}>
        <Toolbar className='appbar-toolbar'>
          <SearchBar />
          <div className='appbar-toolbar actions'>
            <IconButton className='button-icons'>
              <TbSettings className='icons' />
            </IconButton>
            <IconButton className='button-icons'>
              <TbBellRinging className='icons' />
            </IconButton>
            <Avatar
              {...stringAvatar("Kent Dodds")}
              style={{ margin: "0px 0px 0px 10px" }}
            />
          </div>
        </Toolbar>
      </AppBar>
      <Drawer
        className='drawer-header'
        variant='permanent'
        open={open}>
        <List className='sidebar-menu'>
          <NavLink
            className='sidebar-logo'
            to='/dashboard'>
            <ListItem
              disablePadding
              sx={{ display: "block" }}
              className='sidebar-link-item'>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
                className='sidebar-item-button no-hover'>
                <div
                  className='login-logo'
                  style={{ width: "100%" }}>
                  <img
                    src={logo_sidebar}
                    alt='Logo Churchity'
                    style={{ width: "10em" }}
                  />
                </div>
              </ListItemButton>
            </ListItem>
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              isActive ? "sidebar-link active" : "sidebar-link"
            }
            activeClassName='active'
            to='/dashboard'>
            <ListItem
              disablePadding
              sx={{ display: "block" }}
              className='sidebar-link-item'>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                  transition: "all .5s ease",
                  WebkitTransition: "all .5s ease",
                  MozTransition: "all .5s ease",
                }}
                className='sidebar-item-button'>
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                  className='sidebar-item-icon'>
                  <TbLayoutDashboard className='icons' />
                </ListItemIcon>
                <ListItemText
                  className='sidebar-text'
                  primary='Dashboard'
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </ListItem>
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              isActive ? "sidebar-link active" : "sidebar-link"
            }
            to='/teacher'
            activeClassName='active'>
            <ListItem
              disablePadding
              sx={{ display: "block" }}
              className='sidebar-link-item'>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
                className='sidebar-item-button'
                button>
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                  className='sidebar-item-icon'>
                  <TbUsers className='icons' />
                </ListItemIcon>
                <ListItemText
                  className='sidebar-link sidebar-text'
                  primary='Teacher'
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </ListItem>
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              isActive ? "sidebar-link active" : "sidebar-link"
            }
            to='/student'>
            <ListItem
              disablePadding
              sx={{ display: "block" }}
              onClick={() => {
                navigate("/student");
              }}
              className='sidebar-link-item'>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
                className='sidebar-item-button'>
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                  className='sidebar-item-icon'>
                  <TbUserCircle className='icons' />
                </ListItemIcon>
                <ListItemText
                  className='sidebar-link sidebar-text'
                  primary='Student'
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </ListItem>
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              isActive ? "sidebar-link active" : "sidebar-link"
            }
            to='/student'>
            <ListItem
              disablePadding
              sx={{ display: "block" }}
              onClick={() => {
                navigate("/student");
              }}
              className='sidebar-link-item'>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
                className='sidebar-item-button'>
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                  className='sidebar-item-icon'>
                  <TbCertificate className='icons' />
                </ListItemIcon>
                <ListItemText
                  className='sidebar-link sidebar-text'
                  primary='Scoreboard'
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </ListItem>
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              isActive ? "sidebar-link active" : "sidebar-link"
            }
            to='/student'>
            <ListItem
              disablePadding
              sx={{ display: "block" }}
              onClick={() => {
                navigate("/student");
              }}
              className='sidebar-link-item'>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
                className='sidebar-item-button'>
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                  className='sidebar-item-icon'>
                  <TbTemplate className='icons' />
                </ListItemIcon>
                <ListItemText
                  className='sidebar-link sidebar-text'
                  primary='Event Management'
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </ListItem>
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              isActive ? "sidebar-link active" : "sidebar-link"
            }
            to='/statistic'>
            <ListItem
              disablePadding
              sx={{ display: "block" }}
              onClick={() => {
                navigate("/statistic");
              }}
              className='sidebar-link-item'>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
                className='sidebar-item-button'>
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                  className='sidebar-item-icon'>
                  <TbChartDonut className='icons' />
                </ListItemIcon>
                <ListItemText
                  className='sidebar-link sidebar-text'
                  primary='Report'
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </ListItem>
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              isActive ? "sidebar-link active" : "sidebar-link"
            }
            to='/setting'>
            <ListItem
              disablePadding
              sx={{ display: "block" }}
              onClick={() => {
                navigate("/setting");
              }}
              className='sidebar-link-item'>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
                className='sidebar-item-button'>
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                  className='sidebar-item-icon'>
                  <TbSettings className='icons' />
                </ListItemIcon>
                <ListItemText
                  className='sidebar-link sidebar-text'
                  primary='Setting'
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </ListItem>
          </NavLink>
        </List>
      </Drawer>
    </div>
  );
};

export default Sidebar;
