import React from "react";
import PropTypes from "prop-types";
import {
  Box,
  Typography,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@material-ui/core";
import { v4 as uuidv4 } from 'uuid';

const InputWithLabel = (props) => {
  return (
    <Box mb={2}>
      <Typography variant="p">
        <Box mb={1} fontSize={props.fontSize}>
          {props.label}
        </Box>
      </Typography>
      <FormControl variant="outlined" fullWidth>
        <InputLabel id="demo-simple-select-outlined-label">
          {props.placeholder}
        </InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined-label"
          label={props.placeholder}
          fullWidth
        >
          {props.answers.map((ans) => (
            <MenuItem key={uuidv4()} value={ans}>{ans}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

InputWithLabel.propTypes = {
  fontSize:PropTypes.number,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  answers: PropTypes.array
};

export default InputWithLabel;
