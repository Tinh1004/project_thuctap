import { useRef, useState, useCallback } from "react";
import "./login.css";
import { Link } from "react-router-dom";
// import Facebook from "../components/form_login/FacebookLogin";

// import Google from "../components/form_login/GoogleLogin"
// import Login from "../components/form_login/GoogleLogin"

import { LoginSocialFacebook, LoginSocialGoogle } from "reactjs-social-login";
import {
  FacebookLoginButton,
  GoogleLoginButton,
} from "react-social-login-buttons";


const Login = () => {
  const [Username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const user = {
    username: "test123",
    password: "12345",
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (Username === user.username) {
      if (password === user.password) {
        console.log("User Loged in");
      } else {
        console.log("wrong password");
      }
    } else {
      console.log("please check username ");
    }
  };

  const [provider, setProvider] = useState("");
  const [profile, setProfile] = useState("");
  const googleRef = useRef();
  const facebookRef = useRef();

  const onLoginStart = useCallback(() => {
    console.log("login start");
  }, []);

  const onLogoutFailure = useCallback(() => {
    console.log("logout fail");
  }, []);

  return (
    <form className="form" onSubmit={submitHandler}>
      <div className="inner-form">
        <h1>Login</h1>

        <div className={`App ${provider && profile ? "hide" : ""}`}>
          <LoginSocialFacebook
            ref={facebookRef}
            appId={"556246546227879"}
            onLoginStart={onLoginStart}
            onResolve={({ provider, data }) => {
              setProvider(provider);
              setProfile(data);
              console.log(data, "data");
              console.log(provider, "provider");
            }}
            onReject={(err) => {
              console.log(err);
            }}
          >
            <FacebookLoginButton style={{ margin: 10 }} />
          </LoginSocialFacebook>

          <LoginSocialGoogle
            ref={googleRef}
            client_id="1009598528563-a0roh8h4vpdi366hdh9uoqv4qucmct41.apps.googleusercontent.com"
            onLogoutFailure={onLogoutFailure}
            onLoginStart={onLoginStart}
            onResolve={({ provider, data }) => {
              setProvider(provider);
              setProfile(data);
              console.log(data, "data");
              console.log(provider, "provider");
            }}
            onReject={(err) => {
              console.log("hbhbdhd", err);
            }}
          >
            <GoogleLoginButton />
          </LoginSocialGoogle>
        </div>

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
              onChange={(e) => setUsername(e.target.value)}
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
              <a className="forgot-password">Forgot Password?</a>
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
};
export default Login;
