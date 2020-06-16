import React from "react";
import { Button } from "@material-ui/core";
import PropTypes from "prop-types";

const OutlineButton = ({text, color, fullWidth}) => {
  return (
    <div>
      <Button variant="outlined" color={color} fullWidth={fullWidth}>
        {text}
      </Button>
    </div>
  );
};

OutlineButton.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    fullWidth: PropTypes.bool
}
export default OutlineButton;
