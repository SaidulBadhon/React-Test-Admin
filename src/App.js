import React from "react";

import { Admin, Resource } from "react-admin";

import Dashboard from "./Dashboard/Dashboard";
import NotFound from "./404NotFoud/NotFound.js";
import authProvider from "./authProvider";

import MyLayout from "./MyLayout/MyLayout";

import { UserList } from "./users.js";

import jsonServerProvider from "ra-data-json-server";
import { PostList, PostEdit, PostCreate } from "./posts";

import PeopleAltRoundedIcon from "@material-ui/icons/PeopleAltRounded";
import PostAddRoundedIcon from "@material-ui/icons/PostAddRounded";
import MyLoginPage from "./MyLayout/Authentication/MyLoginPage";

const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");

//import dataProvider from "./dataProvider";

const App = () => (
  <Admin
    dashboard={Dashboard}
    layout={MyLayout}
    /*menu={Menu}*/
    catchAll={NotFound}
    authProvider={authProvider}
    dataProvider={dataProvider}
    loginPage={MyLoginPage}
  >
    <Resource name="users" list={UserList} icon={PeopleAltRoundedIcon} />
    <Resource
      name="posts"
      list={PostList}
      edit={PostEdit}
      create={PostCreate}
      icon={PostAddRoundedIcon}
    />
  </Admin>
);

export default App;
