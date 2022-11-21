import React from "react";
import PropTypes from "prop-types";

const Button = ({ colour, text,onClick }) => {
  return (
    <div>
      <button
        className="btn"
        onClick={onClick}
        style={{ backgroundColor: colour }}
        >
        {text}
      </button>
    </div>
  );
};

Button.propTypes = {
  color: PropTypes.string,
  text: PropTypes.string,
};

export default Button;
