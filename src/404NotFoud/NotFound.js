// in src/NotFound.js
import React, { Fragment } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { Title } from "react-admin";

import MySidebar from "../MyLayout/Sidebar/MySidebar.js";

import "./NotFound.css";

/*
 <Title title="Not Found" />
*/

export default () => (
  <Fragment>
    <div className="NotFoundBody">
      <Card>
        <CardContent>
          <h1>404: Page not found</h1>
        </CardContent>
      </Card>
    </div>
  </Fragment>
);
