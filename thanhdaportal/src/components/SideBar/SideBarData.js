import React from 'react';

//Imported icons
import {TbHome} from 'react-icons/tb';
import {
  FaUserGraduate,
  FaUserFriends,
  FaUserTie,
  FaChartPie,
  FaCog,
} from "react-icons/fa";

export const SideBarData = [
  {
    title: "Dashboard",
    path: "/",
    icon: <TbHome />,
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