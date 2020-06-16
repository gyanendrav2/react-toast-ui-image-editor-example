import React from "react";
import { PropTypes } from "prop-types";
import DoneAllRoundedIcon from "@material-ui/icons/DoneAllRounded";

class ConfirmationFeedback extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <div className="row" style={{ color: "#518a43" }}>
          <div className="col-1">
            <DoneAllRoundedIcon />
          </div>
          <div className="col-11">{this.props.text}</div>
        </div>
      </React.Fragment>
    );
  }
}

ConfirmationFeedback.propTypes = {
  text: PropTypes.string
};

export default ConfirmationFeedback;
