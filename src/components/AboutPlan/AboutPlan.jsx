import React from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import ProgressBar from "../ProgressBar/ProgressBar";
import Helper from "../Helper/Helper";

import styles from "./AboutePlan.module.scss";

function AboutPlan({ onClickEditBtn }) {
  const { iprStatus, userData } = useSelector((state) => state.user);
  const {
    iprName,
    iprGoal,
    iprDescription,
    iprDeadline,
    progress,
    deadlineFlag,
    isVerified,
    isNewCard,
  } = userData.userIpr;

  const { pathname } = useLocation();
  return (
    <section className={styles.root}>
      <div className={styles.infoColumn}>
        <h2 className={iprStatus === "cancel" ? styles.textCancel : ""}>
          {iprName}
        </h2>
        <p
          className={`${styles.subtitle} ${
            iprStatus === "cancel" && styles.textCancel
          }`}
        >
          {iprGoal}
        </p>
        <p
          className={`${styles.description} ${
            iprStatus === "cancel" && styles.textCancel
          }`}
        >
          {iprDescription}
        </p>
        <p
          className={`${styles.data} ${
            iprStatus === "cancel" && styles.textCancel
          }`}
        >
          {iprStatus === "cancel" ? "Остановлен" : `До ${iprDeadline}`}
        </p>
      </div>
      <div className={styles.rightWrapper}>
        {iprStatus === "cancel" ? (
          <Helper
            title="Ваш ИПР на паузе"
            advices="Как только руководитель возобновит ИПР, вы сможете продолжить своё развитие, а пока отдохните!"
          />
        ) : (
          <>
            {pathname === "/management" && (
              <button
                onClick={onClickEditBtn}
                className={styles.editIcon}
              ></button>
            )}
            <ProgressBar
              isSmall={false}
              value={progress}
              isVerified={isVerified}
              isDeadline={deadlineFlag}
              isCancel={false}
              isNewCard={isNewCard}
            />
          </>
        )}
      </div>
    </section>
  );
}

export default AboutPlan;
