import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { openTaskModal } from '../../store/taskSlice';
import styles from './AddTaskButton.module.scss';

function AddTaskButton({ isActive = false }) {
  const [isActiveButton, setIsActiveButton] = useState(isActive);
  const dispatch = useDispatch();

  return (
    <button
      type='button'
      className={styles.button}
      disabled={!isActiveButton}
      onClick={() => dispatch(openTaskModal('createTask'))}
    >
      <span
        className={
          isActiveButton
            ? `${styles.button_text}`
            : `${styles.button_text_invalid}`
        }
      >
        Добавить задачу
      </span>
    </button>
  );
}

export default AddTaskButton;
