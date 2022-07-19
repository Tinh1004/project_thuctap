import React from "react";
import { Link } from "react-router-dom";

export default function ForgotPassword() {
  return (
    <form className="form">
      <div className="inner-form">
        <h1>Forgot Password</h1>
        <div className="form-group">
          <label htmlFor="password" className="label">
            New Password
          </label>
          <input
            type="text"
            className="ls-input"
            placeholder="New Password"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password" className="label">
            Confirm Password
          </label>
          <input
            type="text"
            className="ls-input"
            placeholder="Confirm Password"
            required
          />
        </div>
        <button className="submit" type="submit">
          Save
        </button>
        <p> 
              <Link to="/login">
                <a className="link">Back to Login</a>
              </Link>
            </p>
      </div>
    </form>
  );
}
