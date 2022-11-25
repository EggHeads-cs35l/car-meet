
import React, { useState } from "react"

export default function (props) {
  let [authMode, setAuthMode] = useState("signin")

  const changeAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin")
  }

  if (authMode === "signin") {
    return (
      <div className="login-form-container">
        <form className="login-form">
          <div className="login-form-content">
            <h3 className="login-form-title">Log In</h3>
            <div className="text-center">
              Not registered yet?{" "}
              <span className="link-primary" onClick={changeAuthMode}>
                <u>Sign Up</u>
              </span>
            </div>
            <div className="form-group mt-3">
              <label>Username</label>
              <input
                type="text"
                className="form-control mt-1"
                placeholder="Enter username"
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Enter password"
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    )
  }

  return (
    <div className="login-form-container">
      <form className="login-form">
        <div className="login-form-content">
          <h3 className="login-form-title">Sign Up</h3>
          <div className="text-center">
            Already registered?{" "}
            <span className="link-primary" onClick={changeAuthMode}>
              <u>Log In</u>
            </span>
          </div>
          <div className="form-group mt-3">
            <label>Name</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="First Last"
            />
          </div>
          <div className="form-group mt-3">
            <label>Profile Image</label>
            <input
              type="file"
              accept=".jpeg, .png"
              alt = "image of car"
              className="form-control mt-1"
              placeholder="e.g Jane Doe"
            />
          </div>
          {/*or image submit^^ */}
          <div className="form-group mt-3">
            <label>Username</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Enter username"
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
            />
          </div>
          <div className="form-group mt-3">
            <label>Location (State)</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="e.g. California"
            />
          </div>
          <div className="form-group mt-3">
            <label>Make</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="e.g. Toyota"
            />
          </div>
          <div className="form-group mt-3">
            <label>Model</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="e.g. Supra"
            />
          </div>
          <div className="form-group mt-3">
            <label>Year</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Model year"
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}