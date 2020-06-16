import React, { useEffect } from "react";
import { Checkbox } from "@material-ui/core";
import PropTypes from "prop-types";

const CheckBox = ({color, handler}) => {
    const [checked, setChecked] = React.useState(false);

    const handleChange = (event) => {
      setChecked(event.target.checked);
    };

    useEffect(()=>{
      handler(checked)
    }, [checked])

  return (
    <Checkbox
        checked={checked}
        onChange={handleChange}
        color={color}
      />
  );
};

CheckBox.propTypes = {
    color: PropTypes.string,
    handler: PropTypes.func
}
export default CheckBox;
