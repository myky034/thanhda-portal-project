import React from "react";
import "./Students.scss";
import Sidebar from "../../../components/SideBar/Sidebar";
import { Box } from "@mui/material";
//import { styled } from "@mui/material/styles";
import TabBar from "../../../components/TabBar/TabBar";

const Students = () => {
  // const DrawerHeader = styled("div")(({ theme }) => ({
  //   display: "flex",
  //   alignItems: "center",
  //   justifyContent: "flex-end",
  //   padding: theme.spacing(0, 1),
  //   // necessary for content to be below app bar
  //   ...theme.mixins.toolbar,
  // }));

  return (
    <Box className="students-box" component="main" sx={{ flexGrow: 1, p: 3 }}>
      <div style={{ display: "flex" }}>
        <Sidebar />
      </div>

      <div
        className="container-content container-student"
        style={{ display: "grid" }}
      >
        <div className="student-contents">
          <div className="header-student-page">
            <h1>Students</h1>
          </div>
          <div className="tab-bar-students">
            <TabBar />
          </div>
        </div>
      </div>
    </Box>
  );
};

export default Students;
