import 'date-fns';
import React, { useEffect } from 'react';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import PropTypes from "prop-types";


const DateSelector = ({getDate})=> {
  const [selectedDate, setSelectedDate] = React.useState();

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  useEffect(() => {
     getDate(selectedDate)
  }, [selectedDate]);

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDatePicker
          disableToolbar
          variant="outline"
          format="MM/dd/yyyy"
          margin="normal"
          id="date-picker-inline"
          label="Date picker inline"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
    </MuiPickersUtilsProvider>
  );
}

DateSelector.propTypes = {
    getDate: PropTypes.func
}

export default DateSelector;