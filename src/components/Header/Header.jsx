import React from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/img/logo.svg";
import avatar from "../../assets/img/avatar.png";

import styles from "./Header.module.scss";

function Header() {
  return (
    <header className={styles.header}>
      <Link to="/" className={styles.logoLink}>
        <img src={logo} alt="logo" />
        <h3>Alfa People</h3>
      </Link>
      <button>
      <img src={avatar} alt="avatar" />
      </button>
    </header>
  );
}

export default Header;
