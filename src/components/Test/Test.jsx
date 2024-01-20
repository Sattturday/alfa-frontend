import React from "react";

import BackLink from "../BackLink/BackLink";

import styles from "./Test.module.scss";

function Test() {
  return (
    <div className={styles.test}>
      <BackLink 
      text="Назад" 
      link="/" 
      />
      <h1>Test Test Test Test Test Test Test</h1>
    </div>
  );
}

export default Test;
