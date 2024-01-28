import React from "react";

import Profile from "../../components/Profile/Profile";
import AboutPlan from "../../components/AboutPlan/AboutPlan";
import BackLink from "../../components/BackLink/BackLink";
import TaskListTitle from "../../components/TaskListTitle/TaskListTitle";
import { IDPcardsData } from "../../utils/data";
import ShowList from "../../components/ShowList/ShowList";

function Management() {
  return (
    <main>
      <BackLink text="Назад" link="/" />
      <Profile/>
      <AboutPlan/>
      <TaskListTitle />
      <ShowList type="Task" cards={IDPcardsData} />
    </main>
  );
}

export default Management;
