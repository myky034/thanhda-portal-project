import React, { useEffect, useState } from "react";
import "./Students.scss";
import Sidebar from "../../../components/SideBar/Sidebar";
import { Box } from "@mui/material";
//import { styled } from "@mui/material/styles";
import TabBar from "../../../components/TabBar/TabBar";
import { Dropdown, Button } from "react-bootstrap";
import NewStudents from "./ListStudents/AddNewStu/NewStudents";

function simulateNetworkRequest() {
  return new Promise((resolve) => setTimeout(resolve, 2000));
}

const Students = () => {
  // const DrawerHeader = styled("div")(({ theme }) => ({
  //   display: "flex",
  //   alignItems: "center",
  //   justifyContent: "flex-end",
  //   padding: theme.spacing(0, 1),
  //   // necessary for content to be below app bar
  //   ...theme.mixins.toolbar,
  // }));

  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    if (isLoading) {
      simulateNetworkRequest().then(() => {
        setLoading(false);
      });
    }
  }, [isLoading]);

  const handleClick = () => setLoading(true);

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
            <h1 className="title-page-student">Students</h1>
            <div className="header-button-action">
              <div className="dropdown-semester">
                <Dropdown>
                  <Dropdown.Toggle id="dropdown-basic">
                    Học Kỳ I
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Học Kỳ II</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">
                      Cả Năm
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>

              <div className="doub-button">
                <Button
                  variant="primary"
                  disabled={isLoading}
                  onClick={!isLoading ? handleClick : null}
                  className="button-export"
                >
                  {isLoading ? "Loading…" : "Export"}
                </Button>

                <Button
                  variant="primary"
                  disabled={isLoading}
                  onClick={!isLoading ? handleClick : null}
                  className="button-import"
                >
                  {isLoading ? "Loading…" : "Import"}
                </Button>
              </div>

              <div className="addNew-button button-modal">
                <NewStudents />
              </div>
            </div>
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
