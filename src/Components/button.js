import React from "react";
import { PropTypes } from "prop-types";

class Button extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      styles: {
        common: {
          borderRadius: "3.5px",
          fontWeight: "500",
          transition:
            "background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
          lineHeight: "1.75",
          letterSpacing: "0.03857em",
          textTransform: "uppercase"
        },
        small: {
          color: "#fff",
          backgroundColor: this.props.bgColor,
          padding: "5px 10px",
          fontSize: "12px"
        },
        medium: {
          color: this.props.color,
          backgroundColor: this.props.bgColor,
          padding: "6px 16px",
          fontSize: "14px"
        },
        large: {
          color: this.props.color,
          backgroundColor: this.props.bgColor,
          padding: "10px 20px",
          fontSize: "15px"
        }
      }
    };

    this.btnStyle = {
      ...this.state.styles.common,
      ...this.state.styles[this.props.size.toLowerCase()]
    };
  }

  handleClick = () => {
    this.props.onClick();
  };

  render() {
    return (
      <button style={this.btnStyle} onClick={this.handleClick}>
        {this.props.children}
      </button>
    );
  }
}

Button.propTypes = {
  children: PropTypes.string,
  size: PropTypes.string,
  color: PropTypes.string,
  bgColor: PropTypes.string,
  onClick: PropTypes.func
};

export default Button;
