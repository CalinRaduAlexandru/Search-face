import React from "react";
import Tilt from "react-tilt";
import face from "./facial-recognition.png";
import "./Logo.css";

const Logo = () => {
  return (
    <div className="logo-box">
      <Tilt
        className="Tilt br2 shadow-2"
        options={{ max: 55 }}
        style={{ height: 80, width: 80 }}
      >
        <div className="Tilt-inner pa30">
          <img alt="logo" src={face} />
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
