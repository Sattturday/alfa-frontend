import React from 'react';
import styles from './TaskCard.module.scss';
import '../../styles/abstract/constants.scss';
import CommentIconEmpty from '../../assets/img/icon_comment_empty.svg';
import CommentIconFull from '../../assets/img/icon_comment_full.svg';
import SelectStatus from '../SelectStatus/SelectStatus';

function TaskCard({ card }) {
  const handleCardClick = () => {
    console.log(card);
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
