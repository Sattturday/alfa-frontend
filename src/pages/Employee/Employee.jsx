import React from "react";
import { useDispatch, useSelector } from "react-redux";

import BackLink from "../../components/BackLink/BackLink";
import Profile from "../../components/Profile/Profile";
import AboutPlan from "../../components/AboutPlan/AboutPlan";
import ShowList from "../../components/ShowList/ShowList";
import Helper from "../../components/Helper/Helper";
import TaskListTitle from "../../components/TaskListTitle/TaskListTitle";
import { changeStatusIpr } from "../../store/userSlice";

import styles from "./Employee.module.scss";

function Employee() {
  const { iprStatus, userData } = useSelector((state) => state.user);
  const tasks = userData.userIpr.iprTasks;
  const dispatch = useDispatch();

  return (
    <main className={styles.employee}>
      <BackLink text="Назад" link="/" />
      <Profile />
      {iprStatus === "no" && (
        <div className={styles.empty}>
          <Helper
            title="У вас пока что нет ИПР"
            advices="Для вас пока не назначен индивидуальный план развития. Как только руководитель поставит вам цель, тут появятся задачи и ваш прогресс"
          />
        </div>
      )}
      {iprStatus === "cancel" && <AboutPlan />}
      {iprStatus === "active" && (
        <>
          <AboutPlan />
          <TaskListTitle />
          <ShowList type="Task" cards={tasks} />
        </>
      )}
    </main>
  );
}

export default Employee;
