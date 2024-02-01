import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import logo from "../../assets/img/logo.svg";

import styles from "./Header.module.scss";

function Header() {
  const mainAvatar = useSelector((state) => state.user.mainAvatar);
  return (
    <header className={styles.header}>
      <Link to="/" className={styles.logoLink}>
        <img src={logo} alt="logo" />
        <h3>Alfa People</h3>
      </Link>
      <button>
        <img src={mainAvatar} alt="avatar" />
      </button>
    </header>
  );
}

export default Header;
