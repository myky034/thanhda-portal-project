import React from "react";
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from './views/admin/DashBoard/Dashboard';
import Students from './views/admin/Students/Students';
import Parents from './views/admin/Parents/Parents';
import Teachers from './views/admin/Teachers/Teachers';
import Statistics from './views/admin/Statistics/Statistics';
import Settings from './views/admin/Settings/Settings';

function App() {
  return (
    //<div></div>
    <Router>
      <div className="App">
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/student" element={<Students />} />
          <Route path="/parent" element={<Parents />} />
          <Route path="/teacher" element={<Teachers />} />
          <Route path="/statistic" element={<Statistics />} />
          <Route path="/setting" element={<Settings />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
