import React from "react";
import { Link } from "react-router-dom";

export default class Account extends React.Component {
  goToHome = () => {
    window.location.assign("/");
  };

  render() {
    return (
      <div>
        <h1>Account page</h1>
        {/* <Link to="/">Home</Link> */}
        <button onClick={this.goToHome}>Back to Home</button>
      </div>
    );
  }
}
