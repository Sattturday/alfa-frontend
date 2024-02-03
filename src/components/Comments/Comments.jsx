import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Input } from '@alfalab/core-components/input';
import { PaperAirplaneMIcon } from '@alfalab/icons-glyph/PaperAirplaneMIcon';
import { IconButton } from '@alfalab/core-components/icon-button';

import styles from './Comments.module.scss';

export default function Comments() {
  const { task } = useSelector((state) => state.task);
  const [inputValue, setInputValue] = useState('');

  const handleClick = () => {
    console.log(inputValue);
    setInputValue('');
  };

  return (
    <div className={styles.comments}>
      <p className={styles.title}>Комментарии к задаче</p>
      <ul className={styles.list}>
        {task.comments.length !== 0 &&
          task.comments.map((comment) => {
            const isBoss = comment.author === 'Самый главный анархист';
            return (
              <li
                key={comment.id}
                className={`${styles.item} ${isBoss && styles.boss}`}
              >
                <div className={styles.wrap}>
                  <p className={styles.author}>{comment.author}</p>
                  <p className={styles.date}>{comment.postdate}</p>
                </div>
                <p className={styles.content}>{comment.content}</p>
              </li>
            );
          })}
      </ul>
      <Input
        className={styles.input}
        name='message'
        value={inputValue}
        block={true}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder='Написать комментарий...'
        size='m'
        rightAddons={
          <IconButton
            view='secondary'
            onClick={handleClick}
            icon={PaperAirplaneMIcon}
            size='s'
            dataTestId='icon'
          />
        }
      />
    </div>
  );
}
