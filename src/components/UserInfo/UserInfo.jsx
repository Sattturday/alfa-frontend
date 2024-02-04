import React from 'react';
import { useSelector } from 'react-redux';

import styles from './UserInfo.module.scss';

function UserInfo({ type }) {
  // здесь получаем данные из стора, полученные с сервера и записанные в него при входе на страницу ИПР
  // const { userData } = useSelector((state) => state.user);
  const { IDPdata } = useSelector((state) => state.user);

  return (
    <>
      {type === 'confirm' ? (
        <>
          <img className={styles.img_s} src={IDPdata.avatar} alt='avatar' />
          <div className={styles.info_s}>
            <h1>{IDPdata.employeeName}</h1>
            <p>{IDPdata.employeeJob}</p>
          </div>
        </>
      ) : (
        <>
          <img className={styles.img} src={IDPdata.avatar} alt='avatar' />
          <div className={styles.info}>
            <h1>{IDPdata.employeeName}</h1>
            <p>{IDPdata.employeeJob}</p>
          </div>
        </>
      )}
    </>
  );
}

export default UserInfo;
