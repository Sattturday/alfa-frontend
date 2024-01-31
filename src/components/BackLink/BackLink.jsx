import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import styles from "./BackLink.module.scss";
import {
  openConfirmPopup,
  setIsActive,
  setDataInfo,
} from "../../store/modalSlice";

function BackLink({ text, link, type }) {
  const dispatch = useDispatch();

  return (
    <>
      <Link
        type={type}
        to={link}
        className={styles.link}
        onClick={
          type === "create-ipr"
            ? () => {
                dispatch(
                  setDataInfo({
                    title: `${
                      text === "Отменить создание ИПР"
                        ? "Вы уверены, что хотите прекратить создание ИПР?"
                        : "Вы уверены, что хотите прекратить редактирование?"
                    }`,
                    description: "Введённые вами данные не сохранятся.",
                    leftButtonText: "Отменить",
                    rightButtonText: "Ок",
                  })
                );
                dispatch(setIsActive("cancel"));
                dispatch(openConfirmPopup());
              }
            : ""
        }
      >
        <div></div>
        <span>{text}</span>
      </Link>
    </>
  );
}

export default BackLink;
