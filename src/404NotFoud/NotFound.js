// in src/NotFound.js
import React, { Fragment } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { Title } from "react-admin";

import MySidebar, { EFG } from "../MyLayout/Sidebar/MySidebar.js";

import "./NotFound.css";

import svg from "./404-PageNotFound.svg";

/*
 <Title title="Not Found" />
*/

const pageNotFound = true;

export default () => (
  <Fragment>
    {MySidebar.Thisasd == true}
    <div className="NotFoundBody">
      <img src={svg} alt="404 Background" />
      <Card>
        <CardContent>
          <h1>404: Page not found</h1>
        </CardContent>
      </Card>
    </div>
  </Fragment>
);
