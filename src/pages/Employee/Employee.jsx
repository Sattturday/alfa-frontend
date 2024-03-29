import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import BackLink from '../../components/BackLink/BackLink';
import Profile from '../../components/Profile/Profile';
import AboutPlan from '../../components/AboutPlan/AboutPlan';
import ShowList from '../../components/ShowList/ShowList';
import Helper from '../../components/Helper/Helper';
import TaskListTitle from '../../components/TaskListTitle/TaskListTitle';
import { IDPcardsData } from '../../utils/data';
import { setIDPdata, setUserAvatar } from '../../store/userSlice';

import styles from './Employee.module.scss';

function Employee() {
  const dispatch = useDispatch();

  // здесь имитируем получение данных ИПР при входе с сервера
  const dataIDP = IDPcardsData[0];

  // достаем из стора актуальные данные
  const { IDPdata } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(setIDPdata(dataIDP));
    dispatch(setUserAvatar(dataIDP.avatar));
  }, []);

  return (
    <main className={styles.employee}>
      <BackLink link='/' type='logout' />
      <Profile />
      {IDPdata.status === '' && (
        <div className={styles.empty}>
          <Helper
            title='У вас пока что нет ИПР'
            advices='Для вас пока не назначен индивидуальный план развития. Как только руководитель поставит вам цель, тут появятся задачи и ваш прогресс'
          />
        </div>
      )}
      {IDPdata.status && IDPdata.status === 'Canceled' ? (
        <AboutPlan />
      ) : (
        <>
          <AboutPlan />
          <TaskListTitle />
          <ShowList type='Task' cards={IDPdata.tasks} />
        </>
      )}
    </main>
  );
}

export default Employee;
