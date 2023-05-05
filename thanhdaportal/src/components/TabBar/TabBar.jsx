import React from 'react';
import './TabBar.scss';
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import ListStudents from './../../views/admin/Students/ListStudents/ListStudents';

const TabBar = () => {

    const [value, setValue] = React.useState("1");

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

  return (
    <div>
      <Box sx={{ width: "100%", typography: "body1" }} className="tab-students">
        <TabContext value={value} className="tab-context-student">
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example" className='tab-list'>
              <Tab label="Danh Sách" value="1" className='tab-button-header' />
              <Tab label="Điểm Danh" value="2" className='tab-button-header' />
              <Tab label="Học Tập" value="3" className='tab-button-header' />
              <Tab label="Kỷ Luật" value="4" className='tab-button-header' />
              <Tab label="Tổng Kết" value="5" className='tab-button-header' />
            </TabList>
          </Box>
          <TabPanel value="1" className='tab-item-content' style={{padding: "10px"}}>
            <ListStudents />
          </TabPanel>
          <TabPanel value="2" className='tab-item-content'>Item Two</TabPanel>
          <TabPanel value="3" className='tab-item-content'>Item Three</TabPanel>
          <TabPanel value="4" className='tab-item-content'>Item Three</TabPanel>
          <TabPanel value="5" className='tab-item-content'>Item Three</TabPanel>
        </TabContext>
      </Box>
    </div>
  );
}

export default TabBar
