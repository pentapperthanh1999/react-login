import React from "react";
import PropTypes from "prop-types";
import Navbar from "../../../common/Navbar";

function DefaultAdmin(props) {
  return <Navbar content={props.children}></Navbar>;
}

DefaultAdmin.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default DefaultAdmin;
