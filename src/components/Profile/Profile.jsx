import React from "react";
import { useDispatch } from "react-redux";

import { Button } from "@alfalab/core-components/button";
import { CheckmarkMIcon } from "@alfalab/icons-glyph/CheckmarkMIcon";
import { PauseCompactMIcon } from "@alfalab/icons-glyph/PauseCompactMIcon";
import { TrashCanLineMIcon } from "@alfalab/icons-glyph/TrashCanLineMIcon";
import { openConfirmPopup, setIsActive, setDataInfo } from "../../store/modalSlice";

import UserInfo from "../UserInfo/UserInfo";
import styles from "./Profile.module.scss";

function Profile({
  isOpenAboutPlan,
}) {
  const dispatch = useDispatch();

  return (
    <section className={styles.profile}>
      <UserInfo />
      {isOpenAboutPlan && (
        <div className={styles.buttonField}>
          <Button
            className={styles.button}
            leftAddons={<CheckmarkMIcon />}
            view="accent"
            onClick={() => {
              dispatch(setDataInfo({
                title: "Вы уверены, что хотите завершить ИПР?",
                leftButtonText: "Отменить",
                rightButtonText: "Завершить",
              }))
              dispatch(setIsActive(''))
              dispatch(openConfirmPopup())
            }}
          >
            Завершить
          </Button>
          <Button
            className={styles.button}
            leftAddons={<PauseCompactMIcon />}
            view="primary"
          >
            Пауза
          </Button>
          <Button
            className={styles.button}
            view="primary"
            leftAddons={<TrashCanLineMIcon />}
            name="delete-IPR"
            onClick={() => {
              dispatch(setDataInfo({
                title: "Вы уверены, что хотите удалить ИПР?",
                leftButtonText: "Отменить",
                rightButtonText: "Удалить",
              }))
              dispatch(setIsActive(''))
              dispatch(openConfirmPopup())
            }}
          ></Button>
        </div>
      )}
    </section>
  );
}

export default Profile;
