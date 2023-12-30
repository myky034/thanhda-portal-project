import React, { useEffect, useState } from "react";
import "./Students.scss";
import Sidebar from "../../../components/SideBar/Sidebar";
import { Box, Container, CssBaseline } from "@mui/material";
//import { styled } from "@mui/material/styles";
import TabBar from "../../../components/TabBar/TabBar";
import { Dropdown, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";

function simulateNetworkRequest() {
  return new Promise((resolve) => setTimeout(resolve, 2000));
}

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Students = () => {
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
    <>
      <Box sx={{ display: "flex" }}>
        <Sidebar />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3
          }}
        >
          <Box sx={{ height: "44px" }}>
            <DrawerHeader />
          </Box>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ marginBottom: "0.75rem" }}>
              <h2>Thiếu Nhi</h2>
            </div>
            <div style={{ display: "flex", gap: "10px" }}>
              <div className="dropdown-semester">
                <Dropdown>
                  <Dropdown.Toggle id="dropdown-basic">
                    Học Kỳ I
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Học Kỳ II</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Cả Năm</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
              <div
                style={{
                  display: "flex",
                  gap: "10px",
                  height: "38px",
                  maxHeight: "38xp",
                }}
              >
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
                <Link
                  to="/addstudent"
                  style={{ marginRight: "10px", width: "100%", height: "38px" }}
                  variant="primary"
                  className="btn btn-primary button-icon"
                >
                  Thêm mới
                </Link>
              </div>
            </div>
          </div>
          <CssBaseline />
          <Container
            maxWidth="xl"
            sx={{
              margin: "0px",
              paddingLeft: "0px !important",
              paddingRight: "0px !important",
            }}
          >
            <Box
              sx={{
                padding: "10px",
                backgroundColor: "#FFFFFF",
                borderRadius: "4px",
              }}
            >
              <TabBar />
            </Box>
          </Container>
        </Box>
      </Box>
    </>
  );
};

export default Students;
