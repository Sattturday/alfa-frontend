import React from "react";
import styles from "./ExitConfirmPopup.module.scss";
import { Button } from "@alfalab/core-components-button";

function ExitConfirmPopup({ showPopup, onClickCancel, onClickOk }) {
  return (
    <div
      onClick={onClickCancel}
      className={
        showPopup
          ? `${styles.overlay} ${styles.overlay_active}`
          : `${styles.overlay}`
      }
    >
      <div className={styles.popup_container}>
        <h2 className={styles.title}>
          Вы уверены, что хотите прекратить создание ИПР?
        </h2>
        <p className={styles.text}>Введённые вами данные не сохранятся.</p>
        <div className={styles.button_container}>
          <Button
            name="cancel"
            type="button"
            view="secondary"
            size="m"
            className={styles.button_cancel}
            onClick={onClickCancel}
          >
            Отменить
          </Button>
          <Button
            name="ok"
            view="accent"
            size="xxs"
            className={styles.button_confirm}
            onClick={onClickOk}
            shape=""
          >
            Ок
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ExitConfirmPopup;
