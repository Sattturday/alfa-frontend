import React, { useState } from "react";
import "./TaskCard.scss";
import CommentButton from "../CommentButton/CommentButton";
import { SelectDesktop } from "@alfalab/core-components/select/shared";
import {
  BaseOption
} from "@alfalab/core-components/select/shared";

function TaskCard() {

  const cardProps = {
    title: "Видео по HTML",
    descript: "Описание работы сотрудника по первым двум строчкам текста, который необходи для понимания",
    date: "12.02.2024"
  }

  const OPTIONS = [
    { key: '1', content: 'Не выполнено' },
    { key: '2', content: 'Выполнено' }
];

  return (
    <article className="task-card">
      <div className="task-card__container">
        <h3>{cardProps.title}</h3>
        {/* <button type="submit" className="task-card__comment"></button> */}
        <CommentButton />
      </div>
      <p className="task-card__descript">{cardProps.descript}</p>
      <div className="task-card__status-block">
          <p>{`До ${cardProps.date}`}</p>
          {/* <select name="status" id="status-select" className="task-card__status-select">
            <option value="notComplited">Не выполнено</option>
            <option value="done">Выполнено</option>
          </select> */}
          <div style={{ width: 320 }}>
            <SelectDesktop
                allowUnselect={true}
                size='m'
                options={OPTIONS}
                placeholder='Выберите элемент'
                label='Одиночный выбор'
                Option={BaseOption}
                block={true}
            />

        </div>
      </div>

    </article>
  );
}

export default TaskCard;
