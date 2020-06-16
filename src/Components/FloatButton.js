import React from "react";
import {  Fab } from "@material-ui/core";
import PropTypes from "prop-types";

const IconButton = ({ text, icon, color, trigger }) => {

return <Fab color={color} onClick={trigger} >{icon} {text}</Fab>;
};

IconButton.propTypes = {
  text: PropTypes.string,
  icon: PropTypes.element,
  color: PropTypes.string,
  trigger: PropTypes.func
};
export default IconButton;
