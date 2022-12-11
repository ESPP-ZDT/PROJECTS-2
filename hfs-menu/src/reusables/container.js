import React from "react";
import { Link } from "react-router-dom";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

class Container extends React.Component {
  constructor(props) {
    super();
    this.state = {
      menuIsOpen: false,
    };
  }

  sidebar = () => {
    const navigateToPage = (destination) => {
      window.location.assign(destination);
    };
    return (
      <Drawer
        open={this.state.menuIsOpen}
        onClose={() => {
          this.setState({ menuIsOpen: false });
        }}
      >
        <ListItem
          button
          onClick={() => {
            navigateToPage("/");
          }}
        >
          <ListItemText primary={"Home"} />
        </ListItem>
        <ListItem
          button
          onClick={() => {
            navigateToPage("/account");
          }}
        >
          <ListItemText primary={"Account"} />
        </ListItem>
      </Drawer>
    );
  };

  header = () => {
    return (
      <div>
        <AppBar style={{ position: "static", height: "8vh" }}>
          <Toolbar>
            <IconButton
              onClick={() => {
                this.setState({ menuIsOpen: true });
              }}
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <h3>header</h3>
          </Toolbar>
        </AppBar>
      </div>
    );
  };

  footer = () => {
    return (
      <Toolbar
        style={{
          position: "static",
          background: "#525252",
          height: "8vh",
          color: "white",
        }}
      >
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/account">Account</Link>
          </li>
        </ul>
      </Toolbar>
    );
  };

  render() {
    return (
      <div>
        {this.header()}
        {this.sidebar()}
        <div style={{ height: "84vh" }}>{this.props.children}</div>
        {this.footer()}
      </div>
    );
  }
}

export default Container;
