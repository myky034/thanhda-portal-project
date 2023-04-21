import React from 'react';
import './DashBoard.scss';
import Sidebar from '../../../components/SideBar/Sidebar';
import { Box, Typography } from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import WelcomeBox from './../../../components/WelcomeBox/WelcomeBox';
import Calendar from '../../../components/Calendar/CalendarBox';
import CalendarBox from '../../../components/Calendar/CalendarBox';
import News from './News/News';
import EventsBox from './EventsBox/EventsBox';
import ActivityLog from './ActivityLog/ActivityLog';

const Dashboard = () => {

  const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  }));

  return (
    <Box className="dashboard-box" component="main" sx={{ flexGrow: 1, p: 3 }}>
      <DrawerHeader className="drawer-header" />
      <div style={{ display: "flex" }}>
        <Sidebar />
        <WelcomeBox />
        <CalendarBox />
      </div>
      <div
        className="container-content container-dashboard"
        style={{ display: "flex", margin: "1rem 0rem 0rem 0rem" }}
      >
        <News />
        <EventsBox />
        <ActivityLog />
      </div>
    </Box>
  );
}

export default Dashboard
