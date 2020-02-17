import React from "react";
import "./Button.css";

class Button extends React.Component {
  onClickHandler = () => {
    if (typeof this.props.onClickHandler === "function") {
      this.props.onClickHandler();
    }
  };
  render() {
    return (
      <span className="button-container" onClick={() => this.onClickHandler()}>
        {this.props.children}
      </span>
    );
  }
}

export default Button;
