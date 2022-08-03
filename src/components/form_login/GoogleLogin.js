import { LoginSocialGoogle } from "reactjs-social-login";
import { GoogleLoginButton } from "react-social-login-buttons";

import { useState, useRef, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import userSlice from "../../redux/userSlice/userSlice";

export default function GoogleLogin() {
  const [provider, setProvider] = useState("");
  const [profile, setProfile] = useState("");
  const googleRef = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onLoginStart = useCallback(() => {
    console.log("login start");
  }, []);

  const onResolveLogin = useCallback(({ provider, data }) => {
    navigate("/");
    setProvider(provider);
    setProfile(data);
    console.log(data, "data");
    console.log(provider, "provider");
    dispatch(
      userSlice.actions.login({
        fullName: data.name,
        _id: data.id,
        image: data.picture,
      })
    );
    navigate("/");
  }, []);

  const onLogoutFailure = useCallback(() => {
    console.log("logout fail");
  }, []);
  const onReject = useCallback((err) => {
    console.log(err);
  }, []);
  return (
    <div className={`App ${provider && profile ? "hide" : ""}`}>
      <LoginSocialGoogle
        align="center"
        display="flex"
        ref={googleRef}
        client_id="1009598528563-a0roh8h4vpdi366hdh9uoqv4qucmct41.apps.googleusercontent.com"
        onLogoutFailure={onLogoutFailure}
        onLoginStart={onLoginStart}
        onResolve={onResolveLogin}
        onReject={onReject}
      >
        <GoogleLoginButton align="center" display="flex" />
      </LoginSocialGoogle>
    </div>
  );
}
