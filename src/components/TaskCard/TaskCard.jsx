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

  const handleCardClick = () => {
    dispatch(setTask(card));
    dispatch(openTaskModal('aboutTask'));
  };

  const handleSelectStatusClick = (e) => {
    e.stopPropagation();
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
      <div onClick={handleSelectStatusClick}>
        {/* Этот div занимает оставшуюся область карточки */}
        <SelectStatus task={card} />
      </div>
    </article>
  );
}

export default TaskCard;
