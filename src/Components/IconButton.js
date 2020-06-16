import React from "react";
import { Button } from "@material-ui/core";
import PropTypes from "prop-types";

const IconButton = ({text, color, fullWidth}) => {
  return (
    <div>
     <input
        accept="image/*"
        style={{display:"none"}}
        id="contained-button-file"
        multiple
        type="file"
      />
      <label htmlFor="contained-button-file">
        <Button variant="contained" color={color} component="span" fullWidth={fullWidth}>
          {text}
        </Button>
      </label>
    </div>
  );
};

IconButton.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    fullWidth: PropTypes.bool
}
export default IconButton;
