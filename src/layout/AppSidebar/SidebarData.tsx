import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";
 
export const SidebarData = [
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: <AiIcons.AiFillHome color="gray" />,
    iconClosed: <RiIcons.RiArrowDownSFill  color="gray"/>,
    iconOpened: <RiIcons.RiArrowUpSFill color="gray" />,
    subNav:[]
   
  },
  {
    title: "Profile",
    path: "/profile",
    icon: <AiIcons.AiFillHome color="gray" />,
    iconClosed: <RiIcons.RiArrowDownSFill  color="gray"/>,
    iconOpened: <RiIcons.RiArrowUpSFill color="gray" />,
    subNav:[]
    
  },
  {
    title: "Product",
    path: "/product",
    icon: <AiIcons.AiFillHome color="gray" />,
    iconClosed: <RiIcons.RiArrowDownSFill  color="gray"/>,
    iconOpened: <RiIcons.RiArrowUpSFill color="gray" />,
    subNav:[]
  },
  {
    title: "Settings",
    path: "/settings",
    icon: <AiIcons.AiFillHome color="gray" />,
    iconClosed: <RiIcons.RiArrowDownSFill  color="gray"/>,
    iconOpened: <RiIcons.RiArrowUpSFill color="gray" />,
    subNav:[]
  },
];