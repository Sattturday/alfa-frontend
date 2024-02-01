import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Profile from '../../components/Profile/Profile';
import AboutPlan from '../../components/AboutPlan/AboutPlan';
import BackLink from '../../components/BackLink/BackLink';
import TaskListTitle from '../../components/TaskListTitle/TaskListTitle';
import ShowList from '../../components/ShowList/ShowList';
import IPRCard from '../../components/IPRCard/IPRCard';
import ConfirmPopup from '../../components/ConfirmPopup/ConfirmPopup';
import { IDPcardsData } from '../../utils/data';
import { setIDPdata } from '../../store/userSlice';

function Management() {
  const dispatch = useDispatch();
  const { id } = useParams(); // получаем id ИПР из адресной строки

  // здесь имитируем получение данных ИПР по id с сервера
  const dataIDP = IDPcardsData[id - 1];

  // записываем данные в стор
  useEffect(() => {
    dispatch(setIDPdata(dataIDP));
  }, []);

  const [isOpenAboutPlan, setIsOpenAboutPlan] = useState(true);

  const { isActive, dataInfo } = useSelector((state) => state.modal);
  // здесь используем данные ИПР из стора, чтобы они всегда были актуальные
  const { IDPdata } = useSelector((state) => state.user);
  // const { userData } = useSelector((state) => state.user);
  // const tasks = userData.userIpr.iprTasks;

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
        link={isOpenAboutPlan ? '/leader' : toggleEditIPR}
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

      <ShowList type='Task' cards={IDPdata.tasks} />
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
