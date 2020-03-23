import React, { Fragment } from "react";
import { IconButton } from "@material-ui/core";

import logo from "./logo.png";

import "./MyAppBar.css";

import NotificationsRoundedIcon from "@material-ui/icons/NotificationsRounded";

import SearchRoundedIcon from "@material-ui/icons/SearchRounded";

import MenuRoundedIcon from "@material-ui/icons/MenuRounded";

function MyAppBar(propos) {
  function MenuButton(e) {
    e.preventDefault();

    console.log("High form Menu");
  }

  return (
    <Fragment>
      <div className="TopHeader">
        <div className="Header">
          <nav>
            <ul>
              <li>
                <IconButton className="MenuIconButton" onClick={MenuButton}>
                  <MenuRoundedIcon />
                </IconButton>
              </li>
            </ul>
          </nav>

          <div className="HeaderUserInfo">
            <IconButton className="SearchIconButton">
              <SearchRoundedIcon />
            </IconButton>

            <IconButton className="NotificationsIconButton">
              <NotificationsRoundedIcon />
            </IconButton>
            <div className="HeaderUserDitels">
              <h5>Saidul Badon</h5>
              <h6>Available</h6>
            </div>

            <div className="Logo">
              <img src={logo} alt="Settings Logo" />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default MyAppBar;
