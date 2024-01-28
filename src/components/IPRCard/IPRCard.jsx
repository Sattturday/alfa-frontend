import React from 'react';
import { Button } from '@alfalab/core-components/button';

import ExitConfirmPopup from '../ExitConfirmPopup/ExitConfirmPopup';
import Helper from '../Helper/Helper';
import styles from './IPRCard.module.scss';

function IPRCard({ onClickCancel, showPopup, onClickOk }) {
  return (
    <>
      <article className={styles.card}>
        <h3>Создание ИПР</h3>
        <div className={styles.container}>
          <form id='ipr-form' className={styles.form}>
            <input
              className={styles.input}
              type='text'
              placeholder='Название ИПР'
            />
            <input className={styles.input} type='text' placeholder='Цель' />
            <input
              className={styles.input}
              type='text'
              placeholder='Описание'
            />
            <input
              className={styles.input}
              type='date'
              placeholder='Дата дедлайна'
            />
          </form>
          <Helper
            title='Принципы заполнения ИПР'
            advices={['заполнить все поля', 'создать хотя бы одну задачу']}
          />
        </div>
        <Button
          type='submit'
          form='ipr-form'
          className={styles.button}
          view='accent'
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
