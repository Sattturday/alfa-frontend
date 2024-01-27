import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./CreateIPR.module.scss";
import BackLink from "../../components/BackLink/BackLink";
import Profile from "../../components/Profile/Profile";
import IPRCard from "../../components/IPRCard/IPRCard";
import AddTaskButton from "../../components/AddTaskButton/AddTaskButton";

function CreateIPR() {
  const [showPopup, setShowPopup] = useState(false);
  const [isClickOk, setIsClickOk] = useState(false);
  const navigate = useNavigate();

  const handleShowPopup = () => {
    setShowPopup(true);
  };

  const handleConfirmCancel = () => {
    setShowPopup(false);
  };

  const handleClickOk = () => {
    setIsClickOk(true);
    navigate(-1);
  };

  return (
    <main className={styles.page}>
      <BackLink
        text="Отменить создание ИПР"
        onShowPopup={handleShowPopup}
        link={isClickOk && "/"}
      />
      <Profile />
      <IPRCard
        onClickCancel={handleConfirmCancel}
        showPopup={showPopup}
        onClickOk={handleClickOk}
      />
      <AddTaskButton />
    </main>
  );
}

export default CreateIPR;
