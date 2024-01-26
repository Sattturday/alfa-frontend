import React from "react";
import styles from "./CreateIPR.module.scss";
import BackLink from "../../components/BackLink/BackLink";
import Profile from "../../components/Profile/Profile";
import IPRCard from "../../components/IPRCard/IPRCard";
import AddTaskButton from "../../components/AddTaskButton/AddTaskButton";

function CreateIPR() {
  return <main className={styles.page}>
    <BackLink text="Отменить создание ИПР" link="/" />
    <Profile />
    <IPRCard />
    <AddTaskButton />
  </main>;
}

export default CreateIPR;
