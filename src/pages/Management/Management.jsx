import React, { useState } from "react";

import Profile from "../../components/Profile/Profile";
import AboutPlan from "../../components/AboutPlan/AboutPlan";
import BackLink from "../../components/BackLink/BackLink";
import TaskListTitle from "../../components/TaskListTitle/TaskListTitle";
import { IDPcardsData } from "../../utils/data";
import ShowList from "../../components/ShowList/ShowList";
import IPRCard from "../../components/IPRCard/IPRCard";

function Management() {
  const [isOpenAboutPlan, setIsOpenAboutPlan] = useState(true);
  const [showPopup, setShowPopup] = useState(false); //дубляж IPRCard

  const handleShowPopup = () => {  //дубляж IPRCard
    setShowPopup(true);
  };

  const toggleEditIPR = () => {
    setIsOpenAboutPlan(!isOpenAboutPlan);
  };

  const handleConfirmCancel = () => { //дубляж IPRCard
    setShowPopup(false);
  };

  return (
    <main>
      <BackLink
        text="Назад"
        onShowPopup={handleShowPopup}
        link={isOpenAboutPlan ? "/" : toggleEditIPR}
      />
      <Profile isOpenAboutPlan={isOpenAboutPlan} />
      {isOpenAboutPlan ? (
        <>
          <AboutPlan onClickEditBtn={toggleEditIPR} />
          <TaskListTitle />
        </>
      ) : (
        <IPRCard
          onClickOk={toggleEditIPR}
          showPopup={showPopup}
          onClickCancel={handleConfirmCancel}
          onShowPopup={handleShowPopup}
          title="Редактирование ИПР"
        />
      )}

      <ShowList type="Task" cards={IDPcardsData} />
    </main>
  );
}

export default Management;
