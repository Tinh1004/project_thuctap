import React, { useState } from "react";
import "./signup.css";
import { Link } from "react-router-dom";

const Register = () => {
  const [fullname, setFullname] = useState(null);
  const [email, setEmail] = useState(null);
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    if (id === "fullname") {
      setFullname(value);
    }
    if (id === "email") {
      setEmail(value);
    }
    if (id === "username") {
      setUsername(value);
    }
    if (id === "password") {
      setPassword(value);
    }
  };
  const handleSubmit = () => {
    console.log(fullname, email, username, password);
  };

  return (
    <form className="form">
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
            value={fullname}
            onChange={(e) => handleInputChange(e)}
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
            value={email}
            onChange={(e) => handleInputChange(e)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="username" className="label">
            Username
          </label>
          <input
            id="username"
            type="text"
            className="ls-input"
            placeholder=" username"
            value={username}
            onChange={(e) => handleInputChange(e)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password" className="label">
            Password
          </label>
          <input
            id="password"
            type="password"
            className="ls-input"
            placeholder="Password"
            value={password}
            onChange={(e) => handleInputChange(e)}
          />
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
        <button onClick={() => handleSubmit()} type="submit" className="submit">
          Sign up
        </button>
        <p className="signup-already">
          <span>Already have an account ?</span>
          <Link to="/login">
            <a className="link">Login</a>
          </Link>
        </p>
      </div>
    </form>
  );
};
export default Register;