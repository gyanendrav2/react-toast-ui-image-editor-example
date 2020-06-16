import React from "react";
import { IconButton } from "@material-ui/core";
import PropTypes from "prop-types";

const UploadButton = ({ icon, color }) => {
  return (
    <IconButton color={color}>
      {icon}
    </IconButton>
  );
};

UploadButton.propTypes = {
  icon: PropTypes.element,
  color: PropTypes.string,
};
export default UploadButton;
