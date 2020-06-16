import React, { useEffect } from 'react';
import Switch from '@material-ui/core/Switch';
import PropTypes from "prop-types";

export default function Switches({color, handler}) {
  const [state, setState] = React.useState(false);

  const handleChange = (event) => {
    setState(event.target.checked );
  };

  useEffect(()=>{
    handler(state)
  }, [state])

  return (
      <Switch
        checked={state.checkedB}
        onChange={handleChange}
        color={color}
      />
  );
}

Switches.propTypes = {
  color: PropTypes.string,
  handler: PropTypes.func
}