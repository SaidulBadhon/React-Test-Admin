import React from "react";
import { AppBar, UserMenu, MenuItemLink } from "react-admin";
import SettingsIcon from "@material-ui/icons/Settings";

import { Button, IconButton } from "@material-ui/core";
import "./MySidebar.css";

import DashboardRoundedIcon from "@material-ui/icons/DashboardRounded";
import AccountBoxRoundedIcon from "@material-ui/icons/AccountBoxRounded";
import PostAddRoundedIcon from "@material-ui/icons/PostAddRounded";
import MessageRoundedIcon from "@material-ui/icons/MessageRounded";
import LocalOfferRoundedIcon from "@material-ui/icons/LocalOfferRounded";

class MySidebar extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: false
    };
  }

  render() {
    return (
      <div>
        {this.state.isLoading ? (
          <h1></h1>
        ) : (
          <div className="SideBar">
            <div className="SideBarButtons">
              <Button
                className="ButtonClass"
                style={{ height: 50 }}
                onClick={() => {
                  window.location.href = "#/";
                }}
              >
                &nbsp;
                <DashboardRoundedIcon
                  style={{ color: "rgba(40, 40, 40, .9)" }}
                />
                &nbsp; Dashboard
              </Button>
              <br></br>
              <Button
                style={{ height: 50 }}
                onClick={() => {
                  window.location.href = "#/users";
                }}
              >
                &nbsp;
                <AccountBoxRoundedIcon
                  style={{ color: "rgba(40, 40, 40, .9)" }}
                />
                &nbsp; User
              </Button>
              <br></br>
              <Button
                style={{ height: 50 }}
                onClick={() => {
                  window.location.href = "#/posts";
                }}
              >
                &nbsp;
                <PostAddRoundedIcon style={{ color: "rgba(40, 40, 40, .9)" }} />
                &nbsp; Posts
              </Button>
              <br></br>
              <Button style={{ height: 50 }}>
                &nbsp;
                <MessageRoundedIcon style={{ color: "rgba(40, 40, 40, .9)" }} />
                &nbsp; Comments
              </Button>
              <br></br>
              <Button style={{ height: 50 }}>
                &nbsp;
                <LocalOfferRoundedIcon
                  style={{ color: "rgba(40, 40, 40, .9)" }}
                />
                &nbsp; Tags
              </Button>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default MySidebar;
