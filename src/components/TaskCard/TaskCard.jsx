import React from "react";
import styles from "./TaskCard.module.scss";
import "../../styles/abstract/constants.scss";
import CommentIcon from "../../assets/img/icon_comment_empty.svg";
import SelectStatus from "../SelectStatus/SelectStatus";

function TaskCard() {
  const cardProps = {
    title: "Видео по HTML",
    description:
      "Описание работы сотрудника по первым двум строчкам текста, который необходим для понимания",
    date: "12.02.2024",
  };

  return (
    <article className={styles.card}>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div className={styles.card__container}>
          <h3>{cardProps.title}</h3>
          <img
            alt="Кнопка комментариев"
            src={CommentIcon}
            className={styles.icon_comment}
          />
        </div>
        <p className={styles.card__description}>{cardProps.description}</p>
      </div>
      <SelectStatus date={cardProps.date}/>
    </article>
  );
}

export default TaskCard;
