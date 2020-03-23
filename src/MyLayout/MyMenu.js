import React from "react";

import { Button } from "@material-ui/core";
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
