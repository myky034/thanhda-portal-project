import React from "react";
import "./DashBoard.scss";
import Sidebar from "../../../components/SideBar/SideBar";
import { Box, Typography } from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import WelcomeBox from "./../../../components/WelcomeBox/WelcomeBox";
import CalendarBox from "../../../components/Calendar/CalendarBox";
import News from "./News/News";
import EventsBox from "./EventsBox/EventsBox";
import ActivityLog from "./ActivityLog/ActivityLog";

const Dashboard = () => {
  // const DrawerHeader = styled("div")(({ theme }) => ({
  //   display: "flex",
  //   alignItems: "center",
  //   justifyContent: "flex-end",
  //   padding: theme.spacing(0, 1),
  //   // necessary for content to be below app bar
  //   ...theme.mixins.toolbar,
  // }));

  return (
    <Box className="dashboard-box" component="main" sx={{ flexGrow: 1, p: 3 }}>

      <div style={{ display: "flex" }}>
        <Sidebar />
      </div>

      <div
        className="container-content container-dashboard"
        style={{ display: "grid" }}
      >

        <div style={{ display: "flex", marginBottom: "1rem" }}>
          <WelcomeBox />
          <CalendarBox />
        </div>

        <div style={{ display: "flex" }}>
          <News />
          <EventsBox />
          <ActivityLog />
        </div>

      </div>

    </Box>
  );
};

export default Dashboard;
