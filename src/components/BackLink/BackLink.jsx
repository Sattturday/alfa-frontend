import React from "react";
import { Link } from "react-router-dom";

import styles from "./BackLink.module.scss";

function BackLink({ text, link, onShowPopup }) {
  return (
    <>
      <Link to={link} className={styles.link} onClick={onShowPopup}>
        <div></div>
        <span>{text}</span>
      </Link>
    </>
  );
}

export default BackLink;
