import React, { useState } from "react";
import { GoogleLogin } from "react-google-login";


function Google() {
  const [showloginButton, setShowloginButton] = useState(true);
  const onLoginSuccess = (response) => {
    console.log("Login Google:", response.profileObj);
    setShowloginButton(false);
  };

  const onLoginFailure = (response) => {
    console.log("Login Fail:", response);
  };


  return (
    <div>
      <div>
        {showloginButton ? (
          <GoogleLogin
            clientId="1009598528563-a0roh8h4vpdi366hdh9uoqv4qucmct41.apps.googleusercontent.com"
            buttonText="Login with Google"
            onSuccess={onLoginSuccess}
            onFailure={onLoginFailure}
            isSignedIn={true}
          />
        ) : null}

      </div>
    </div>
  );
}
export default Google;
