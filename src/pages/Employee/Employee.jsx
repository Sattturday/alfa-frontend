import React from "react";

import BackLink from "../../components/BackLink/BackLink";
import Profile from "../../components/Profile/Profile";
import AboutPlan from "../../components/AboutPlan/AboutPlan";
import ShowList from "../../components/ShowList/ShowList";
import { IDPcardsData } from "../../utils/data";

import styles from "./Employee.module.scss";

function Employee() {
  return (
    <main className={styles.employee}>
      <BackLink text="Назад" link="/" />
      <Profile />
      <AboutPlan />
      <div className={styles.taskCard_list}>
        <h2>Список задач</h2>
        <button type="submit"></button>
      </div>
      <ShowList type="Task" cards={IDPcardsData} />
    </main>
  );
}

export default Employee;
