import React from "react";
import { useSelector } from "react-redux";

import BackLink from "../../components/BackLink/BackLink";
import Profile from "../../components/Profile/Profile";
import IPRCard from "../../components/IPRCard/IPRCard";
import AddTaskButton from "../../components/AddTaskButton/AddTaskButton";
import styles from "./CreateIPR.module.scss";

function CreateIPR() {
  const { isClickButtonOk } = useSelector((state) => state.modal);

  return (
    <main className={styles.page}>
      <BackLink
        text="Отменить создание ИПР"
        link={isClickButtonOk && "/"}
        type="create-ipr"
      />
      <Profile />
      <IPRCard title="Создание ИПР" />
      <AddTaskButton />
    </main>
  );
}

export default CreateIPR;
