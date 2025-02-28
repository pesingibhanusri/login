import React, { useState } from "react";
import "./styles.css";

const Login = () => {
  const [isActive, setIsActive] = useState(false);

  const switchContent = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={`content justify-content-center align-items-center d-flex shadow-lg ${isActive ? "active" : ""}`}>
      <div className="col-md-6 d-flex justify-content-center">
        <form>
          <div className="header-text mb-4">
            <h1>Create Account</h1>
            <div className="input-group mb-3">
              <input type="text" placeholder="Name" className="form-control form-control-lg bg-light fs-6" />
            </div>
            <div className="input-group mb-3">
              <input type="email" placeholder="Email" className="form-control form-control-lg bg-light fs-6" />
            </div>
            <div className="input-group mb-3">
              <input type="password" placeholder="Password" className="form-control form-control-lg bg-light fs-6" />
            </div>
            <div className="input-group mb-3 justify-content-center">
              <button className="btn text-white w-50 fs-6">Register</button>
            </div>
          </div>
        </form>
      </div>

      <div className="col-md-6 right-box">
        <form>
          <div className="header-text mb-4">
            <h1>Sign In</h1>
            <div className="input-group mb-3">
              <input type="email" placeholder="Email" className="form-control form-control-lg bg-light fs-6" />
            </div>
            <div className="input-group mb-3">
              <input type="password" placeholder="Password" className="form-control form-control-lg bg-light fs-6" />
            </div>
            <div className="input-group mb-5 d-flex justify-content-between">
              <div className="form-check">
                <input type="checkbox" className="form-check-input" />
                <label htmlFor="formcheck" className="form-check-label text-secondary">
                  <small>Remember me</small>
                </label>
              </div>
              <div className="forget">
                <small>
                  <a href="#">Forget password?</a>
                </small>
              </div>
            </div>
            <div className="input-group mb-3 justify-content-center">
              <button className="btn text-white w-50 fs-6">Login</button>
            </div>
          </div>
        </form>
      </div>

      <div className="switch-content">
        <div className="switch">
          <div className="switch-panel switch-left">
            <h1>Hello, Again</h1>
            <p>We are happy to see you back</p>
            <button className="hidden btn text-white w-50 fs-6" onClick={switchContent}>
              Login
            </button>
          </div>
          <div className="switch-panel switch-right">
            <h1>Welcome</h1>
            <p>Join Our Unique Platform, Explore a New Experience</p>
            <button className="hidden btn border-white text-white w-50 fs-6" onClick={switchContent}>
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
