import * as tf from "@tensorflow/tfjs";
import React, { useEffect, useState } from "react";
import ToggleButton from "react-bootstrap/ToggleButton";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
import { useLocation, useNavigate } from "react-router-dom";
import { CarNoCar } from "../components/model/model.jsx";
import { Update } from "../Database_api/API.js";

/*TODO: set placeholders to be the current values of the user's profile*/
export default function EditProfile() {
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [loc, setLocation] = useState("");
  const [mode, setMode] = useState(" Mode");
  //const [verifyData, setVerifyData] = useState("default");
  const navigate = useNavigate();
  const location = useLocation();
  const userData = location.state;
  const handlebutton = (value) => {
    if (mode.includes(value)) setMode(mode.replace(" " + value, ""));
    else setMode(mode + " " + value);
  };
  const verify = () => {
    if (password === "") {
      alert("Please enter a password");
      return false;
    }
    if (name === "") {
      alert("Please enter your name");
      return false;
    }
    if (location === "") {
      alert("Please enter your location");
      return false;
    }
    if (mode === " Mode") {
      alert("Please select a mode");
      return false;
    }
    return true;
  };
  const handlesubmit = (e) => {
    e.preventDefault();
    if (!verify()) return;

    const data = {
      name: name,
      password: password,
      location: loc,
      mode: mode,
    };
    Update({ user: { username: userData.username }, updates: data });
    navigate("/profile", { state: userData });
  };
  console.log(userData);
  return (
    <div>
      <div
        className="login-form-container"
        style={{
          position: "absolute",
          top: "50%",
          transform: "translateY(-50%)",
          height: "auto",
        }}
      >
        <form className="login-form" onSubmit={handlesubmit}>
          <div className="login-form-content">
            <h3 className="login-form-title">Edit Profile</h3>
            <h4 className="login-form-subtitle">Must enter all details</h4>
            <h4 className="login-form-subtitle">Log in again to see changes</h4>
            <br></br>
            <div className="text-center">
              Cancel edit?{" "}
              <span className="link-primary">
                <u onClick={() => navigate("/stack", { state: userData })}>
                  Back to Stack
                </u>
              </span>
            </div>
            <div className="form-group mt-3">
              <label>Change Password</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="form-group mt-3">
              <label>Change Name</label>
              <input
                type="text"
                className="form-control mt-1"
                placeholder={userData.name}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group mt-3">
              <label>Change Location (State)</label>
              <input
                type="text"
                className="form-control mt-1"
                placeholder={userData.location}
                value={loc}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
            <div className="form-group mt-3">
              <label>Change Mode</label>
              <br></br>
              <ToggleButtonGroup
                type="checkbox"
                defaultValue={0}
                className="mb-2"
              >
                <ToggleButton
                  id="tbg-check-1"
                  value={1}
                  variant="outline-success"
                  onClick={() => {
                    handlebutton("Meet");
                  }}
                >
                  Meet
                </ToggleButton>
                <ToggleButton
                  id="tbg-check-2"
                  value={2}
                  variant="outline-success"
                  onClick={() => {
                    handlebutton("Race");
                  }}
                >
                  Race
                </ToggleButton>
                <ToggleButton
                  id="tbg-check-3"
                  value={3}
                  variant="outline-success"
                  onClick={() => {
                    handlebutton("Drift");
                  }}
                >
                  Drift
                </ToggleButton>
              </ToggleButtonGroup>
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
