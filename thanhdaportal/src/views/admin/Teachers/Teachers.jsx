import React from 'react';
import './Teachers.scss'
import Sidebar from "../../../components/SideBar/Sidebar";
import { Box, Typography } from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";

const Teachers = () => {
  
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
        <h1>Teachers</h1>
      </div>
    </Box>
  );
}

export default Teachers
