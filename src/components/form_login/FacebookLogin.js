import { Component } from "react";
import FacebookLogin from "react-facebook-login";

export default class Facebook extends Component {
  state = {
    auth: false,
    name: "",
    picture: "",
  };
  componentClicked = () => {
    console.log("facebook");
  };
  responseFacebook = (response) => {
    console.log(response);
  };
  render() {
    let facebookData;

    this.state.auth
      ? (facebookData = <div>hi</div>)
      : (facebookData = (
          <FacebookLogin
            appId="556246546227879"
            autoLoad={true}
            fields="name,picture"
            onClick={this.componentClicked}
            callback={this.responseFacebook}
          />
        ));
    return <>{facebookData}</>;
  }
}
