import React from "react";
import Logo from "../Logo/Logo";
import "./Navigation.styles.css";

const Navigation = ({ onRouteChange, isSignedIn }) => {
  if (isSignedIn) {
    return (
      <nav>
        <div className="header">
          <Logo className="logo" />
          <div className="options">
            <p
              onClick={() => onRouteChange("signout")}
              className="f3 link dim black underline pa3 pointer"
            >
              Sign Out
            </p>
          </div>
        </div>
      </nav>
    );
  } else {
    return (
      <nav className="header">
        <Logo className="logo" />
        <div className="options">
          <p
            onClick={() => onRouteChange("signin")}
            className="f3 link dim black underline pa3 pointer"
          >
            Sign In
          </p>
          <p
            onClick={() => onRouteChange("register")}
            className="f3 link dim black underline pa3 pointer"
          >
            Register
          </p>
        </div>
      </nav>
    );
  }
};

export default Navigation;
