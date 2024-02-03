import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@alfalab/core-components/button";

import { closeConfirmPopup } from "../../store/modalSlice";
import UserInfo from "../UserInfo/UserInfo";

import styles from "./ConfirmPopup.module.scss";

function ConfirmPopup({ onClickOk }) {
  const dispatch = useDispatch();
  const { isShowPopup, isActive, dataInfo } = useSelector(
    (state) => state.modal
  );

  return (
    <div
      onClick={() => dispatch(closeConfirmPopup())}
      className={
        isShowPopup
          ? `${styles.overlay} ${styles.overlay_active}`
          : `${styles.overlay}`
      }
    >
      <div
        className={
          isActive === "cancel"
            ? styles.popup_container
            : styles.popup_container_l
        }
      >
        <h2 className={styles.title}>{dataInfo.title}</h2>
        {isActive === "cancel" ? (
          <p className={styles.text}>{dataInfo.description}</p>
        ) : (
          <>
            <div className={styles.user_wrapper}>
              <UserInfo type="confirm" />
            </div>
            <h3 className={styles.name_IPR}>Самый лучший ИПР</h3>
          </>
        )}
        <div
          className={
            isActive === "cancel"
              ? styles.button_container
              : styles.button_container_l
          }
        >
          <Button
            name="cancel"
            type="button"
            view="secondary"
            size="m"
            className={styles.button_cancel}
            onClick={() => dispatch(closeConfirmPopup())}
          >
            {dataInfo.leftButtonText}
          </Button>
          <Button
            name="ok"
            view="accent"
            size="xxs"
            className={
              isActive === "cancel"
                ? styles.button_confirm
                : styles.button_confirm_l
            }
            onClick={onClickOk}
            shape=""
          >
            {dataInfo.rightButtonText}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmPopup;
