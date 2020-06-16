import React, { Component } from "react";
import PropTypes from "prop-types";

class NotFound extends Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.history.push("/login");
    }, 3000);
  }
  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <strong>
          <p>404</p>
        </strong>
        <hr />
        <p>Not Found</p>
      </div>
    );
  }
}

NotFound.propTypes = {
  history: PropTypes.object
}

export default NotFound;
