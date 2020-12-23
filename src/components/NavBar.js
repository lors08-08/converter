import React from "react";
import styles from "./NavBar.module.css";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div className={styles.box}>
      <NavLink to="/converter" exact>
        <div>Конвертер</div>
      </NavLink>
      <NavLink to="/currencies" exact>
        <div>Курсы валют</div>
      </NavLink>
    </div>
  );
}

export default NavBar;
