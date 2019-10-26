import React from "react";
import "../stylesheets/Background.scss";
// import PropTypes from "prop-types";

const Background = () => {
  return (
    <React.Fragment>
      <div className="background__triangle">
        <div className="background__triangle--right"></div>
        <div className="background__triangle--left ${triangleColor"></div>
      </div>
      <div className="background__circle">
        <div className="background__circle--right"></div>
        <div className="background__circle--left"></div>
      </div>
    </React.Fragment>
  );
};

export default Background;
