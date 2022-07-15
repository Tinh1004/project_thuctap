import React from "react";
import "../login.css";
function RegisterPage() {
  return (
    <form>
      <div className="inner-form">
        <h1>Sign up</h1>
        <div className="form-group">
          <label htmlFor="fullname" className="label">
            Full name
          </label>
          <input
            type="text"
            id="fullname"
            className="ls-input"
            placeholder="Eg: Nguyen Van A"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email" className="label">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="ls-input"
            placeholder="Eg: anguyen@gmai.com"
          />
        </div>
        <div className="form-group">
          <label htmlFor="username" className="label">
            Username
          </label>
          <input
            type="text"
            className="ls-input"
            placeholder="Email or username"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password" className="label">
            Password
          </label>
          <input type="password" className="ls-input" placeholder="Password" />
        </div>
        <div classname="form-group">
          <label htmlFor="gender" className="label">
            Gender
          </label>
          <div className="gender">
          <input type="radio" name="gender" defaultValue="male" /> Male
          </div>
          <div className="gender">
          <input type="radio" name="gender" defaultValue="female" /> Female
          </div>
          <div className="gender">
          <input type="radio" name="gender" defaultValue="other" /> Other
          </div>
        </div>

        <button className="submit">Sign up</button>
        <p className="signup-already">
          <span>Already have an account ?</span>
          <a href=" " className="link"> 
            Login
          </a>
        </p>
      </div>
    </form>
  );
}

export default RegisterPage;
