import { useState } from "react";
import "../login.css";
import { Link } from "react-router-dom";
import Facebook from "../components/form_login/FacebookLogin";
// import Facebook from "../components/form_login/FacebookLogin";
import Google from "../components/form_login/GoogleLogin"

const LoginPage = () => {
  const [Username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const user = {
    username: "test123",
    password: "12345"
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (Username ===user.username ) {
      if (password === user.password){
        console.log("User Loged in");
      } else{
        console.log("wrong password");
      }
    } else{
      console.log("please check username ")
    }
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
              className="ls-input"
              placeholder="Email or username"
              onChange={(e) => setUsername(e.target.value )}
              value={Username}
              // required
            />
            <div className="form-group">
              <label htmlFor="password" className="label">
                Password
              </label>
              <input
                type="password"
                className="ls-input"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                // required
              />
            </div>
            <Link to="/forgot">
            <a className="forgot-password">
              Forgot Password?
            </a>
            </Link>
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


