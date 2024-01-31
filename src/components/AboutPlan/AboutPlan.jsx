import React from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import ProgressBar from "../ProgressBar/ProgressBar";
import Helper from "../Helper/Helper";

import styles from "./AboutePlan.module.scss";

function AboutPlan({ onClickEditBtn }) {
  const { iprStatus } = useSelector((state) => state.user);

  const { pathname } = useLocation();
  return (
    <section className={styles.root}>
      <div className={styles.infoColumn}>
        <h2 className={iprStatus === "cancel" ? styles.textCancel : ""}>
          Название ИПР
        </h2>
        <p
          className={`${styles.subtitle} ${
            iprStatus === "cancel" && styles.textCancel
          }`}
        >
          Переход на позицию тим-лида
        </p>
        <p
          className={`${styles.description} ${
            iprStatus === "cancel" && styles.textCancel
          }`}
        >
          Ты мощь, ты сила, уважаю, ты красавчик. Однаждый в студеную зимную
          пору я из лесу вышел, был сильный мороз.Ты мощь, ты сила, уважаю, ты
          красавчик. Однаждый в студеную зимную пору я из лесу вышел, был
          сильный мороз.
        </p>
        <p
          className={`${styles.data} ${
            iprStatus === "cancel" && styles.textCancel
          }`}
        >
          {iprStatus === "cancel" ? "Остановлен" : "До 12.04.2024"}
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
              value={65}
              isVerified={false}
              isDeadline={false}
              isCancel={false}
              isNewCard={false}
            />
          </>
        )}
      </div>
    </section>
  );
}

export default AboutPlan;
