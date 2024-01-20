import React from "react";

import BackLink from "../../components/BackLink/BackLink";
import Profile from "../../components/Profile/Profile";

import styles from "./Employee.module.scss";

function Employee() {
  return (
    <main className={styles.employee}>
      <BackLink text="Назад" link="/" />
      <Profile />
    </main>
  );
}

export default Employee;
