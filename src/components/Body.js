import React from "react";
import styles from "./Body.module.css";
import Converter from "./Converter";
import Currencies from "./Currencies";
import { Redirect, Route, Switch } from "react-router-dom";

function Body() {
  return (
    <div className={styles.box}>
      <Switch>
        <Route exact path="/converter">
          <Converter />
        </Route>
        <Route path="/currencies">
          <Currencies />
        </Route>
        <Redirect to="/converter" />
      </Switch>
    </div>
  );
}

export default Body;
