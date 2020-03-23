// in src/MyLayout.js
import React from "react";

import { Layout } from "react-admin";
import MyAppBar from "./AppBar/MyAppBar.js";
import MyMenu from "./MyMenu.js";
import MySidebar from "./Sidebar/MySidebar.js";

import MyLoginPage from "./Authentication/MyLoginPage";
import MyLogoutButton from "./Authentication/MyLogoutButton";

import "./MyLayout.css";

//import MyNotification from "./MyNotification";

const MyLayout = props => (
  <Layout
    {...props}
    //    menu={MyMenu}
    appBar={MyAppBar}
    sidebar={MySidebar}
    loginPage={MyLoginPage}
    //    logoutButton={MyLogoutButton}

    /*    notification={MyNotification}*/
  />
);

export default MyLayout;
