import React, { useEffect, useState } from "react";
import "./Teachers.scss";
import Sidebar from "../../../components/SideBar/Sidebar";
import { Box, Container, CssBaseline } from "@mui/material";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import ListItemButton from "@mui/material/ListItemButton";
import { Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { styled } from "@mui/material/styles";
import ListTeachers from "./ListTeachers/ListTeachers";
import {
  TbArrowAutofitDown,
  TbArrowAutofitUp,
  TbCirclePlus,
  TbQuestionMark,
} from "react-icons/tb";

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

const Teachers = () => {
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    if (isLoading) {
      simulateNetworkRequest().then(() => {
        setLoading(false);
      });
    }
  }, [isLoading]);

  const handleClick = () => setLoading(true);

  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar />
      <Box
        component='main'
        sx={{
          flexGrow: 1,
          p: 3,
        }}>
        <Box sx={{ height: "44px" }}>
          <DrawerHeader />
        </Box>
        <div
          className='overview-actions'
          style={{
            display: "flex",
            justifyContent: "space-between",
            margin: "30px 0px",
          }}>
          <div className='overview-title'>
            <h2>Teacher</h2>
            <Button className='button button-tooltip'>
              <TbQuestionMark />
            </Button>
            <p className='badge sub-total'>40</p>
          </div>
          <div
            style={{ display: "flex", gap: "10px" }}
            className='overview-button'>
            <div
              style={{
                display: "flex",
                gap: "10px",
                height: "38px",
                maxHeight: "38xp",
              }}>
              <Button
                variant=''
                disabled={isLoading}
                onClick={!isLoading ? handleClick : null}
                className='button button-secondary button-icon'>
                <TbArrowAutofitUp />
                {isLoading ? "Loading…" : "Import"}
              </Button>
              <Button
                variant=''
                disabled={isLoading}
                onClick={!isLoading ? handleClick : null}
                className='button button-secondary button-icon'>
                <TbArrowAutofitDown />
                {isLoading ? "Loading…" : "Export"}
              </Button>
              <NavLink
                to='/addteacher'
                variant='primary'>
                <Button className='button button-primary button-icon'>
                  <TbCirclePlus />
                  New teacher
                </Button>
              </NavLink>
            </div>
          </div>
        </div>
        <CssBaseline />
        <Container
          maxWidth='xl'
          sx={{
            margin: "0px",
            paddingLeft: "0px !important",
            paddingRight: "0px !important",
          }}>
          <Box
            sx={{
              padding: "10px",
              backgroundColor: "#FFFFFF",
              borderRadius: "20px",
            }}>
            <TabContext
              value={value}
              sx={{ height: "100vh" }}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <TabList
                  onChange={handleChange}
                  aria-label='lab API tabs example'
                  className='tab-list'>
                  <Tab
                    label='All teachers'
                    value='1'
                    className='tab-header'
                  />
                  <Tab
                    label='Attendance'
                    value='2'
                    className='tab-header'
                  />
                </TabList>
              </Box>
              <TabPanel
                value='1'
                className='tab-item-content'
                style={{ padding: "10px" }}>
                <ListTeachers />
              </TabPanel>
              <TabPanel
                value='2'
                className='tab-item-content'>
                Item Two
              </TabPanel>
            </TabContext>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Teachers;
