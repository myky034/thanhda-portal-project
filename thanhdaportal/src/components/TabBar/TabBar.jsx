import React from "react";
import "./TabBar.scss";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import TableStudents from "../../views/admin/Students/ListStudents/TableStudents";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";

const TabBar = () => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <TabContext value={value} sx={{ height: "100vh" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList
            onChange={handleChange}
            aria-label="lab API tabs example"
            className="tab-list"
          >
            <Tab label="Danh Sách" value="1" className="tab-header" />
            <Tab label="Điểm Danh" value="2" className="tab-header" />
            <Tab label="Học Tập" value="3" className="tab-header" />
            <Tab label="Kỷ Luật" value="4" className="tab-header" />
            <Tab label="Tổng Kết" value="5" className="tab-header" />
          </TabList>
        </Box>
        <TabPanel
          value="1"
          className="tab-item-content"
          style={{ padding: "10px" }}
        >
          <FormControl sx={{ m: 1, height: "40px" }}>
            <InputLabel htmlFor="outlined-adornment-amount">Search</InputLabel>
            <OutlinedInput
              id="outlined-adornment-amount"
              startAdornment={
                <InputAdornment position="start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="1em"
                    height="1em"
                    viewBox="0 0 30 30"
                  >
                    <path d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z"></path>
                  </svg>
                </InputAdornment>
              }
              label="Search"
              sx={{ height: "40px" }}
            />
          </FormControl>
          <TableStudents />
        </TabPanel>
        <TabPanel value="2" className="tab-item-content">
          Item Two
        </TabPanel>
        <TabPanel value="3" className="tab-item-content">
          Item Three
        </TabPanel>
        <TabPanel value="4" className="tab-item-content">
          Item Three
        </TabPanel>
        <TabPanel value="5" className="tab-item-content">
          Item Three
        </TabPanel>
      </TabContext>
    </div>
  );
};

export default TabBar;
