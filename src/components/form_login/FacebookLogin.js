import { LoginSocialFacebook } from "reactjs-social-login";
import { FacebookLoginButton } from "react-social-login-buttons";

import { useState, useRef, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import userSlice from "../../redux/userSlice/userSlice";

export default function FacebookLogin() {
  const [provider, setProvider] = useState("");
  const [profile, setProfile] = useState("");
  const facebookRef = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onLoginStart = useCallback(() => {
    console.log("login start");
  }, []);

  const onResolveLogin = useCallback(({ provider, data }) => {
    setProvider(provider);
    setProfile(data);
    console.log(data, "data");
    console.log(provider, "provider");
    dispatch(
      userSlice.actions.login({
        fullName: data.name,
        _id: data.userID,
        image: data.picture.data.url,
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
      <LoginSocialFacebook
        align="center"
        display="flex"
        ref={facebookRef}
        appId={"556246546227879"}
        onLoginStart={onLoginStart}
        onLogoutFailure={onLogoutFailure}
        onResolve={onResolveLogin}
        onReject={onReject}
      >
        <FacebookLoginButton
          align="center"
          display="flex"
          style={{ margin: 5 }}
        />
      </LoginSocialFacebook>
    </div>
  );
}
