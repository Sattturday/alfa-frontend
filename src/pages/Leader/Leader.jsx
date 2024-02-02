import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import BackLink from '../../components/BackLink/BackLink';
import ShowList from '../../components/ShowList/ShowList';
import ConfirmPopup from '../../components/ConfirmPopup/ConfirmPopup';
import { IDPcardsData, allRealData } from '../../utils/data';
import { setUserAvatar } from '../../store/userSlice';
import { useGetAllIDPQuery } from '../../api/userApi';

import styles from './Leader.module.scss';

const Leader = () => {
  const dispatch = useDispatch();

  const { isActive } = useSelector((state) => state.modal);

  // получаем данные всех ИПР с сервера
  const { data: allIDPdata, isLoading, error } = useGetAllIDPQuery();

  useEffect(() => {
    if (allIDPdata) {
      console.log('hi');
    }
  }, [allIDPdata]);

  // здесь мы будем записывать в стор данные юзера
  // здесь имитируем получение данных ИПР при входе с сервера
  const dataIDP = IDPcardsData[2];

  // записываем в стор, но потом вожможно это надо будет делать в другом месте, сразу после авторизации
  useEffect(() => {
    dispatch(setUserAvatar(dataIDP.avatar));
  }, []);

  const handleCompleteIPR = () => {
    console.log('complete');
  };

  const handleDeleteIPR = () => {
    console.log('delete');
  };

  const handleCancelIPR = () => {
    console.log('delete');
  };

  return (
    <section className={styles.leader}>
      <BackLink link='/' />
      <h1 className={styles.leader__title}>
        Индивидуальные планы развития для сотрудников
      </h1>
      <ShowList cards={allRealData} />
      {(isActive === 'complete' && (
        <ConfirmPopup onClickOk={handleCompleteIPR} />
      )) ||
        (isActive === 'cancel-card' && (
          <ConfirmPopup onClickOk={handleCancelIPR} />
        )) ||
        (isActive === 'delete' && <ConfirmPopup onClickOk={handleDeleteIPR} />)}
    </section>
  );
};

export default Leader;
