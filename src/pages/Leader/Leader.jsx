import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import BackLink from '../../components/BackLink/BackLink';
import ShowList from '../../components/ShowList/ShowList';
import ConfirmPopup from '../../components/ConfirmPopup/ConfirmPopup';
import { IDPcardsData } from '../../utils/data';
import { setUserAvatar } from '../../store/userSlice';
import { setAllIDPdata } from '../../store/IDPSlice';
import { useGetAllIDPQuery } from '../../api/userApi';

import styles from './Leader.module.scss';

const Leader = () => {
  const dispatch = useDispatch();

  const { isActive } = useSelector((state) => state.modal);
  const { allIDPdata } = useSelector((state) => state.idp);
  const { data: IDPdata, isLoading, error } = useGetAllIDPQuery();

  useEffect(() => {
    if (IDPdata) {
      dispatch(setAllIDPdata(IDPdata));
    }
  }, [IDPdata]);

  const dataIDP = IDPcardsData[2];

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
      <ShowList cards={allIDPdata} />
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
