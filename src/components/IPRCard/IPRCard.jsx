import React from "react";
import styles from "./IPRCard.module.scss";
import FriendlyPic from "../../assets/img/friendly-pic.png";
import ExitConfirmPopup from "../ExitConfirmPopup/ExitConfirmPopup";
import { Button } from '@alfalab/core-components/button';

function IPRCard({ onClickCancel, showPopup, onClickOk }) {
  return (
    <>
      <article className={styles.card}>
        <h3>Создание ИПР</h3>
        <div className={styles.container}>
          <form id="ipr-form" className={styles.form}>
            <input
              className={styles.input}
              type="text"
              placeholder="Название ИПР"
            />
            <input className={styles.input} type="text" placeholder="Цель" />
            <input
              className={styles.input}
              type="text"
              placeholder="Описание"
            />
            <input className={styles.input} type="date" placeholder="Дата дедлайна" />
          </form>
          <section className={styles.instruction_container}>
            <img src={FriendlyPic} alt="Смайл" />
            <h3>Принципы заполнения ИПР</h3>
            <p>Для создания нового ИПР необходимо:</p>
            <ul>
              <li>заполнить все поля</li>
              <li>создать хотя бы одну задачу</li>
              <li>заполнить все поля</li>
              <li>создать хотя бы одну задачу</li>
            </ul>
          </section>
        </div>
        <Button
          type="submit"
          form="ipr-form"
          className={styles.button}
          view="accent"
          disabled
        >
          Создать
        </Button>
      </article>
      <ExitConfirmPopup
        showPopup={showPopup}
        onClickCancel={onClickCancel}
        onClickOk={onClickOk}
        title='Вы уверены, что хотите прекратить создание ИПР?'
        description='Введённые вами данные не сохранятся.'
        leftButtonText='Отменить'
        rightButtonText='Ок'
      />
    </>
  );
}

export default IPRCard;
