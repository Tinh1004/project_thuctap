import { useState } from "react";
import "../login.css";
import { Link } from "react-router-dom";
import Facebook from "../components/form_login/FacebookLogin";
// import Facebook from "../components/form_login/FacebookLogin";
import Google from "../components/form_login/GoogleLogin"
function LoginPage({ Login, error }) {
  const [details, setDetails] = useState({ username: "", password: "" });

  const submitHandler = (e) => {
    e.preventDefault();
    Login(details);
  };
  return (
    <form className="form" onSubmit={submitHandler}>
      <div className="inner-form">
        <h1>Login</h1>
        {/* <button className="login-fb">
          <i className="fa fa-facebook login-icon"></i>
          <span className="login-social-text">Login with Facebook</span>
        </button> */}
        <Facebook className="login-fb"/>
        {/* <button className="login-gg">
          <i className="fa fa-google login-icon"></i>
          <span className="login-social-text">Login with Google</span>
        </button> */}
        <Google className="login-gg"/>
        <div>
          <div className="login-or">
            <span>OR</span>
          </div>
          <div className="form-group">
            <label htmlFor="username" className="label">
              Username
            </label>
            <input
              type="text"
              class="ls-input"
              placeholder="Email or username"
              onChange={(e) => setDetails({ ...details, name: e.target.value })}
              value={details.name}
            />
            <div className="form-group">
              <label htmlFor="password" className="label">
                Password
              </label>
              <input
                type="password"
                className="ls-input"
                placeholder="Password"
              />
            </div>
            <a href=" " className="forgot-password">
              Forgot Password?
            </a>
            <button className="submit" type="submit">
              Login
            </button>
            <p>
              Don't have an account?
              <Link to="/signup">
                <a className="link">Sign Up</a>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </form>
  );
}
export default LoginPage;
