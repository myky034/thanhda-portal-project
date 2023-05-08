import React from "react";
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from './views/admin/DashBoard/Dashboard';
import Students from './views/admin/Students/Students';
import Parents from './views/admin/Parents/Parents';
import Teachers from './views/admin/Teachers/Teachers';
import Statistics from './views/admin/Statistics/Statistics';
import Settings from './views/admin/Settings/Settings';
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import store from "./store";
import StudentDetail from './views/admin/Students/ListStudents/StudentDetail/StudentDetail';
import Login from "./views/login/Login";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/student" element={<Students />} />
            <Route path="/parent" element={<Parents />} />
            <Route path="/teacher" element={<Teachers />} />
            <Route path="/statistic" element={<Statistics />} />
            <Route path="/setting" element={<Settings />} />
            <Route path="/studentdetail/:id" element={<StudentDetail />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
