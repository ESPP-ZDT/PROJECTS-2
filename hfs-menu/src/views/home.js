import React from "react";
import { Link } from "react-router-dom";

import "./home.css";

export default class Home extends React.Component {
  render() {
    return (
      <div className="homePage">
        <h1>Home page</h1>
        <Link to="/account">Account</Link>
      </div>
    );
  }
}
