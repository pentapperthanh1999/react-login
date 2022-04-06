import React from "react";
import PropTypes from "prop-types";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";

export const SidebarData = [
  {
    title: "Dashboard",
    path: "/admin",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Users",
    path: "/",
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: "nav-text",
  },
  {
    title: "Tasks",
    path: "/tasks",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
];
