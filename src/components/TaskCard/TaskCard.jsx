import React from 'react';
import { useDispatch } from 'react-redux';

import { openTaskModal, setTask } from '../../store/taskSlice';
import CommentIconEmpty from '../../assets/img/icon_comment_empty.svg';
import CommentIconFull from '../../assets/img/icon_comment_full.svg';
import SelectStatus from '../SelectStatus/SelectStatus';
import '../../styles/abstract/constants.scss';

import styles from './TaskCard.module.scss';

function TaskCard({ card }) {
  const dispatch = useDispatch();

  const handleCardClick = (e) => {
    if (e.target === e.currentTarget) {
      dispatch(setTask(card));
      dispatch(openTaskModal('aboutTask'));
    }
  };

  return (
    <article className={styles.card} id={card.id} onClick={handleCardClick}>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div className={styles.card__container}>
          <h3>{card.title}</h3>
          <img
            alt='Кнопка комментариев'
            src={card.comments.length ? CommentIconFull : CommentIconEmpty}
            className={styles.icon_comment}
          />
        </div>
        <p className={styles.card__description}>{card.description}</p>
      </div>
      <SelectStatus task={card} />
    </article>
  );
}

export default TaskCard;
