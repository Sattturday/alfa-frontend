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

  return card.tasks.map((task) => {
    return (
      <article
        className={styles.card}
        id={card.employeeId['id']}
        onClick={handleCardClick}
      >
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div className={styles.card__container}>
            <h3>{task.title}</h3>
            <img
              alt='Кнопка комментариев'
              src={task.comments.length ? CommentIconFull : CommentIconEmpty}
              className={styles.icon_comment}
            />
          </div>
          <p className={styles.card__description}>{task.description}</p>
        </div>
        <SelectStatus key={task.id} task={task} />
      </article>
    );
  });
}

export default TaskCard;
