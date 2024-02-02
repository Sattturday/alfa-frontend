import React, { useState, useEffect } from 'react';

import yellowColorArrow from '../../assets/img/select-arrow-yellow.svg';
import redColorArrow from '../../assets/img/select-arrow-red.svg';
import greenColorArrow from '../../assets/img/select-arrow-green.svg';
import { formatDate } from '../../utils/utils';
import '../../styles/abstract/constants.scss';

import styles from './SelectStatus.module.scss';

function SelectStatus({ task }) {
  const [value, setValue] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [isOpenList, setIsOpenList] = useState(false);
  const [buttonStyle, setButtonStyle] = useState({});

  const rebButton = {
    border: '1px solid #ef3124',
    backgroundImage: `url(${redColorArrow})`,
    color: '#ef3124',
  };

  const greenButton = {
    border: '1px solid #0cc44d',
    backgroundImage: `url(${greenColorArrow})`,
    color: '#0cc44d',
  };

  const yellowButton = {
    border: '1px solid #fa9313',
    backgroundImage: `url(${yellowColorArrow})`,
    color: '#fa9313',
  };

  const showList = () => {
    setIsOpenList(true);
  };

  const hideList = () => {
    setIsOpenList(false);
  };

  const changeButton = (e) => {
    if (e.currentTarget.id === 'done') {
      setInputValue(e.currentTarget.id);
      setButtonStyle(greenButton);
      setValue('Выполнено');
    }
    if (e.currentTarget.id === 'inWork') {
      setInputValue(e.currentTarget.id);
      setButtonStyle(yellowButton);
      setValue('В работе');
    }
    if (e.currentTarget.id === 'noCompleted') {
      setInputValue(e.currentTarget.id);
      setButtonStyle(rebButton);
      setValue('Ожидание');
    }
    hideList();
  };

  useEffect(() => {
    if (task.status === 'done') {
      setButtonStyle(greenButton);
      setValue('Выполнено');
    } else if (task.status === 'inWork') {
      setButtonStyle(yellowButton);
      setValue('В работе');
    } else if (task.status === 'noCompleted') {
      setButtonStyle(rebButton);
      setValue('Ожидание');
    }
  }, []);

  return (
    <div className={styles.card__block}>
      <p>{`До ${formatDate(task.deadline)}`}</p>
      <div className={styles.dropdown} id='status'>
        <button
          name='status'
          className={`${styles.dropdown__button}`}
          style={buttonStyle}
          onClick={showList}
        >
          {value}
        </button>
        <ul
          className={
            isOpenList
              ? `${styles.dropdown__list} ${styles.dropdown__list_visible}`
              : `${styles.dropdown__list}`
          }
        >
          <li
            onClick={changeButton}
            className='dropdown__list-item'
            id='noCompleted'
          >
            Ожидание
          </li>
          <li
            onClick={changeButton}
            className='dropdown__list-item'
            id='inWork'
          >
            В работе
          </li>
          <li onClick={changeButton} className='dropdown__list-item' id='done'>
            Выполнено
          </li>
        </ul>
        <input
          type='text'
          name='select-input'
          value={inputValue}
          className={styles.dropdown__input}
          onChange={(e) => setInputValue(e.target.value)}
        ></input>
      </div>
      <div
        onClick={hideList}
        className={
          isOpenList
            ? `${styles.overlay} ${styles.overlay_active}`
            : `${styles.overlay}`
        }
      ></div>
    </div>
  );
}

export default SelectStatus;
