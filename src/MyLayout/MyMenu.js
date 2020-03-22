import React from "react";
import { AppBar, UserMenu, MenuItemLink } from "react-admin";
import SettingsIcon from "@material-ui/icons/Settings";

import { Button, IconButton } from "@material-ui/core";
import "./MyMenu.css";

function MyMenu() {
  return (
    <div className="MenuBar">
      <div className="Buttons">
        <Button>Dashboard</Button>

        <Button>User</Button>

        <Button>Posts</Button>
      </div>
    </div>
  );
}

export default MyMenu;
