import React from "react";
import styles from "./IPRCard.module.scss";
import FriendlyPic from "../../assets/img/friendly-pic.png";

function IPRCard() {

  return <article >
    <h3>Создание ИПР</h3>
    <div className={styles.container}>
      <form id="ipr-form" className={styles.form}>
        <input className={styles.input} type="text"placeholder="Название ИПР" />
        <input className={styles.input} type="text" placeholder="Цель"/>
        <input className={styles.input} type="text" placeholder="Описание"/>
        <input className={styles.input} type="date" placeholder="Дата"/>
      </form>
      <section className={styles.instruction_container}>
        <img src={FriendlyPic} alt="Смайл"/>
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
    <button type="submit" form="ipr-form" disabled>Создать</button>
  </article>;
}

export default IPRCard;
