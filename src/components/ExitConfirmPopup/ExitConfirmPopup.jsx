import React from "react";
import styles from "./ExitConfirmPopup.module.scss";
import { Button } from "@alfalab/core-components-button";

// title - текст заголовка
// description - текст описания
// leftButtonText - текст левой кнопки
// rightButtonTex - текст правой кнопки

function ExitConfirmPopup({
  showPopup,
  onClickCancel,
  onClickOk,
  title,
  description,
  leftButtonText,
  rightButtonText
}) {
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
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.text}>{description}</p>
        <div className={styles.button_container}>
          <Button
            name="cancel"
            type="button"
            view="secondary"
            size="m"
            className={styles.button_cancel}
            onClick={onClickCancel}
          >
            {leftButtonText}
          </Button>
          <Button
            name="ok"
            view="accent"
            size="xxs"
            className={styles.button_confirm}
            onClick={onClickOk}
            shape=""
          >
            {rightButtonText}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ExitConfirmPopup;
