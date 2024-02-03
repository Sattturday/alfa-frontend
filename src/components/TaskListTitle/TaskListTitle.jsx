import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import styles from './TaskListTitle.module.scss';
import { openTaskModal, setTypeTaskModal } from '../../store/taskSlice';

function TaskListTitle() {
  const dispatch = useDispatch();
  const { IDPdata } = useSelector((state) => state.user);

  const handleClick = () => {
    dispatch(openTaskModal('allComments'));
  };

  return (
    <div className={styles.taskCard_list}>
      <h2>Список задач</h2>
      {IDPdata.messageFlag && (
        <button type='submit' onClick={handleClick}></button>
      )}
    </div>
  );
}

export default TaskListTitle;
