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
    this.setState({
      auth: true,
      name: response.name,
      picture: response.picture.data.url,
    });
  };
  render() {
    let facebookData;

    this.state.auth
      ? (facebookData = (
          <div>
            <img src={this.state.picture} alt={this.state.name} />
            <h2>welcome {this.state.name}</h2>
          </div>
        ))
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
