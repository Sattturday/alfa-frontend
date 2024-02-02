import { useDispatch, useSelector } from 'react-redux';

import { formatDate } from '../../utils/utils';
import {
  openTaskModal,
  setIsNavItemActive,
  setTask,
  toggleIsBack,
} from '../../store/taskSlice';

import styles from './CommentsList.module.scss';

export default function CommentsList() {
  const dispatch = useDispatch();
  const { IDPdata } = useSelector((state) => state.user);

  const status = (slug) =>
    `${
      slug === 'noCompleted'
        ? 'Ожидание'
        : slug === 'inWork'
        ? 'В работе'
        : 'Выполнено'
    }`;

  const handleClick = (task) => {
    dispatch(setTask(task));
    dispatch(openTaskModal('aboutTask'));
    dispatch(toggleIsBack());
    dispatch(setIsNavItemActive('secondary'));
  };

  return (
    <ul className={styles.list}>
      {IDPdata.tasks.length !== 0 &&
        IDPdata.tasks.map((task) => {
          return (
            task.comments.length !== 0 &&
            task.comments.map((comment) => {
              return (
                <li
                  className={styles.item}
                  key={comment.id}
                  onClick={() => handleClick(task)}
                >
                  <div className={styles.wrap}>
                    <p className={styles.title}>{task.title}</p>
                    <p className={`${styles.status} ${styles[task.status]}`}>
                      {status(task.status)}
                    </p>
                    <p className={styles.date}>
                      {formatDate(comment.postdate)}
                    </p>
                    <p className={styles.text}>{comment.content}</p>
                  </div>
                </li>
              );
            })
          );
        })}
    </ul>
  );
}
