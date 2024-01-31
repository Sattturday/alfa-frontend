import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import Profile from '../../components/Profile/Profile';
import AboutPlan from '../../components/AboutPlan/AboutPlan';
import BackLink from '../../components/BackLink/BackLink';
import TaskListTitle from '../../components/TaskListTitle/TaskListTitle';
import { IDPcardsData } from '../../utils/data';
import ShowList from '../../components/ShowList/ShowList';
import IPRCard from '../../components/IPRCard/IPRCard';
import ConfirmPopup from '../../components/ConfirmPopup/ConfirmPopup';

function Management() {
  const [isOpenAboutPlan, setIsOpenAboutPlan] = useState(true);

  const { isActive, dataInfo } = useSelector((state) => state.modal);

  const handleCompleteIPR = () => {
    console.log('complete');
  };

  const handleDeleteIPR = () => {
    console.log('delete');
  };

  const toggleEditIPR = () => {
    setIsOpenAboutPlan(!isOpenAboutPlan);
  };

  return (
    <main>
      <BackLink
        text='Назад'
        type={!isOpenAboutPlan && 'create-ipr'}
        link={isOpenAboutPlan ? '/' : toggleEditIPR}
      />
      <Profile isOpenAboutPlan={isOpenAboutPlan} />
      {isOpenAboutPlan ? (
        <>
          <AboutPlan onClickEditBtn={toggleEditIPR} />
          <TaskListTitle />
        </>
      ) : (
        <IPRCard title='Редактирование ИПР' />
      )}

      <ShowList type='Task' cards={IDPcardsData[0].tasks} />
      {isActive === 'cancel' ? (
        <ConfirmPopup onClickOk={toggleEditIPR} />
      ) : (
        <ConfirmPopup
          onClickOk={
            dataInfo.title === 'Вы уверены, что хотите завершить ИПР?'
              ? handleCompleteIPR
              : handleDeleteIPR
          }
        />
      )}
    </main>
  );
}

export default Management;
