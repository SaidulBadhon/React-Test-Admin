// in src/users.js
import React from "react";
import { List, Datagrid, TextField, EmailField } from "react-admin";

import "./user.css";

import MyUrlField from "./MyUrlField";

export const UserList = props => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="username" />
      <EmailField source="email" />
      <TextField source="address.street" />
      <TextField className="link" source="phone" />
      <MyUrlField source="website" />
      <TextField source="company.name" />
    </Datagrid>
  </List>
);
