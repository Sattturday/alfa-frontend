import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import {
  openConfirmPopup,
  setIsActive,
  setDataInfo,
} from '../../store/modalSlice';
import { openTaskModal, toggleIsBack } from '../../store/taskSlice';

import styles from './BackLink.module.scss';

function BackLink({ text = 'Назад', link, type }) {
  const dispatch = useDispatch();

  return (
    <>
      <Link
        type={type}
        to={link}
        className={`${styles.link} ${type === 'allComments' ? styles.all : ''}`}
        onClick={
          type === 'create-ipr'
            ? () => {
                dispatch(
                  setDataInfo({
                    title: `${
                      text === 'Отменить создание ИПР'
                        ? 'Вы уверены, что хотите прекратить создание ИПР?'
                        : 'Вы уверены, что хотите прекратить редактирование?'
                    }`,
                    description: 'Введённые вами данные не сохранятся.',
                    leftButtonText: 'Отменить',
                    rightButtonText: 'Ок',
                  })
                );
                dispatch(setIsActive('cancel'));
                dispatch(openConfirmPopup());
              }
            : type === 'allComments'
            ? () => {
                dispatch(toggleIsBack());
                dispatch(openTaskModal('allComments'));
              }
            : ''
        }
      >
        <div></div>
        <span>{text}</span>
      </Link>
    </>
  );
}

export default BackLink;
