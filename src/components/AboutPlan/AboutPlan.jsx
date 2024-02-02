import React from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { formatDate } from '../../utils/utils';
import ProgressBar from '../ProgressBar/ProgressBar';
import Helper from '../Helper/Helper';

import styles from './AboutePlan.module.scss';

function AboutPlan({ onClickEditBtn }) {
  // здесь просто получаем данные ИПР из стора
  const { IDPdata } = useSelector((state) => state.user);
  const { status, title, goal, description, deadline, progress, deadlineFlag } =
    IDPdata;

  // const { iprStatus, userData } = useSelector((state) => state.user);
  // const {
  //   iprName,
  //   iprGoal,
  //   iprDescription,
  //   iprDeadline,
  //   progress,
  //   deadlineFlag,
  //   isVerified,
  //   isNewCard,
  // } = userData.userIpr;

  const { pathname } = useLocation();
  return (
    <section className={styles.root}>
      <div className={styles.infoColumn}>
        <h2 className={status === 'cancel' ? styles.textCancel : ''}>
          {title}
        </h2>
        <p
          className={`${styles.subtitle} ${
            status === 'cancel' && styles.textCancel
          }`}
        >
          {goal}
        </p>
        <p
          className={`${styles.description} ${
            status === 'cancel' && styles.textCancel
          }`}
        >
          {description}
        </p>
        <p
          className={`${styles.data} ${
            status === 'cancel' && styles.textCancel
          }`}
        >
          {status === 'cancel' ? 'Остановлен' : `До ${formatDate(deadline)}`}
        </p>
      </div>
      <div className={styles.rightWrapper}>
        {status === 'cancel' ? (
          <Helper
            title='Ваш ИПР на паузе'
            advices='Как только руководитель возобновит ИПР, вы сможете продолжить своё развитие, а пока отдохните!'
          />
        ) : (
          <>
            {pathname === '/management' && (
              <button
                onClick={onClickEditBtn}
                className={styles.editIcon}
              ></button>
            )}
            <ProgressBar
              isSmall={false}
              value={progress}
              isVerified={status === 'Checked'}
              isDeadline={deadlineFlag}
              isCancel={false}
              isNewCard={!status}
            />
          </>
        )}
      </div>
    </section>
  );
}

export default AboutPlan;
