import React from "react";
import "./TabBar.scss";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import TableStudents from "../../views/admin/Students/ListStudents/TableStudents";
import SearchBar from "../SearchBar/SearchBar";
import DiemHocTap from "../../views/admin/Students/Grade/HocTap/DiemHocTap";

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
          <SearchBar />
          <TableStudents />
        </TabPanel>
        <TabPanel value="2" className="tab-item-content">
          Item Two
        </TabPanel>
        <TabPanel value="3" className="tab-item-content" style={{ padding: "10px" }}>
          <SearchBar />
          <DiemHocTap />
        </TabPanel>
        <TabPanel value="4" className="tab-item-content">
          Item Four
        </TabPanel>
        <TabPanel value="5" className="tab-item-content">
          Item Five
        </TabPanel>
      </TabContext>
    </div>
  );
};

export default TabBar;
