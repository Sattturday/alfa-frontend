import React from "react";

import BackLink from "../../components/BackLink/BackLink";
import Profile from "../../components/Profile/Profile";
import AboutPlan from "../../components/AboutPlan/AboutPlan";
import ShowList from "../../components/ShowList/ShowList";
import { IDPcardsData } from "../../utils/data";
import TaskListTitle from "../../components/TaskListTitle/TaskListTitle";

import styles from "./Employee.module.scss";

function Employee() {
  return (
    <main className={styles.employee}>
      <BackLink text="Назад" link="/" />
      <Profile />
      <AboutPlan />
      <TaskListTitle />
      <ShowList type="Task" cards={IDPcardsData} />
    </main>
  );
}

export default Employee;
