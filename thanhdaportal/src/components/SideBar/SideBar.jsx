import React from "react";
import "./SideBar.scss";

//Imported icons
import { FaBars } from "react-icons/fa";
import { IoMdLogOut } from "react-icons/io5";
import { HiHome } from "react-icons/hi";
import {
  FaUserGraduate,
  FaUserFriends,
  FaUserTie,
  FaChartPie,
  FaCog,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const SideBar = ({ children }) => {
  return (
    <div className="side-nav-container">
      <div className="side-upper">
        <div className="side-heading">
          <div className="side-brand">
            <h2>Thanh Da Portal</h2>
          </div>
          <div className="bugerContainer">
            <button className="hambuger">
              <FaBars className="icon" />
            </button>
          </div>
        </div>

        <div className="side-content-container">
          {SideBarData.map(({ title, path, icon, linkText }) => (
            <li className="side-link">
              <Link to={path}>
                  <span className="icon">{icon}</span>
                  <span className="title-link">{title}</span>
                  {/* <div className="linkText">{linkText}</div> */}
              </Link>
            </li>
          ))}
        </div>
      </div>
    </div>
  );
};

const SideBarData = [
  {
    title: "Dashboard",
    path: "/",
    icon: <HiHome />,
    linkText: "Dashboard",
  },
  {
    title: "Students",
    path: "/students",
    icon: <FaUserGraduate />,
    linkText: "Students",
  },
  {
    title: "Parents",
    path: "/parents",
    icon: <FaUserFriends />,
    linkText: "Parents",
  },
  {
    title: "Teachers",
    path: "/teachers",
    icon: <FaUserTie />,
    linkText: "Teachers",
  },
  {
    title: "Statistics",
    path: "/statistics",
    icon: <FaChartPie />,
    linkText: "Statistics",
  },
  {
    title: "Settings",
    path: "/settings",
    icon: <FaCog />,
    linkText: "Settings",
  },
];

export default SideBar;
