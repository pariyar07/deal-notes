import React from "react";
import { Link } from "react-router-dom";
import { BsFillPlayFill, BsFillLightbulbFill } from "react-icons/bs";
import {useAuth} from "contexts/authContext";
import useToast from "custom/useToast";

export const LandingPageBody = () => {
  const {isLoggedIn} = useAuth();
  const {showToast} = useToast();

  const notifyLogin = () => {
    showToast("Please login", "error")
  }

  return (
    <div className="home-body-wrapper">
      <div className="home-top-section">
        <div className="body-card">
          <img
            className="body-card-img"
            src="assets/lightbulb.png"
            alt="light bulb"
          />
          <p className="body-card-para">Do your</p>
          <p className="body-card-para-brand">DEAL...</p>
        </div>
        <div className="body-info">
          <h1 className="body-feature">Easy.</h1>
          <h1 className="body-feature">Productive.</h1>
          <h1 className="body-feature">Minimalistic.</h1>
          <div className="body-tagline">
            <img className="target-img" src="assets/target.png" alt="target" />
            <p>
              We keep everything together in one place. So you can focus on what
              you love.
            </p>
          </div>
          <div className="body-btn">
            <div className="how-it-works">
              <BsFillPlayFill />
              <button>Learn More</button>
            </div>
            {isLoggedIn ? <Link to="/notes" className="get-started">
              <BsFillLightbulbFill />
              &nbsp; Get Started
            </Link> : <Link to="/notes" className="get-started" onClick={notifyLogin}>
              <BsFillLightbulbFill />
              &nbsp; Get Started
            </Link>}
          </div>
        </div>
      </div>
      <img className="home-img" src="assets/home-img.png" alt="achievement" />
    </div>
  );
};
