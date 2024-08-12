import React from "react";
import "./DashBoard.scss";
import Sidebar from "../../../components/SideBar/Sidebar";
import { Box } from "@mui/material";

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
    <Box
      className='dashboard-box'
      component='main'
      sx={{ flexGrow: 1, p: 3 }}>
      <div style={{ display: "flex" }}>
        <Sidebar />
      </div>

      <div
        className='container-content container-dashboard'
        style={{ display: "grid" }}></div>
    </Box>
  );
};

export default Dashboard;
