import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@alfalab/core-components/button';
import { Switch } from '@alfalab/core-components/switch';
import { SelectDesktop } from '@alfalab/core-components/select/desktop';
import { BaseOption } from '@alfalab/core-components/select/shared';

import { onEditTask, offSaveSample, onSaveSample } from '../../store/taskSlice';
import { dirOptions } from '../../utils/data';
import TaskForm from '../TaskForm/TaskForm';

import styles from './AboutTask.module.scss';

export default function AboutTask({ handleChange }) {
  const dispatch = useDispatch();
  const { task, isEditTask, isSaveSample, dirSample } = useSelector(
    (state) => state.task
  );

  const handleEditClick = () => {
    dispatch(onEditTask());
    console.log('edit');
  };

  const handleCancelClick = () => {
    dispatch(onEditTask());
    console.log('cancel');
  };

  const handleDeleteClick = () => {
    console.log('click');
  };

  return isEditTask ? (
    <div className={styles.about_task}>
      <p className={styles.title_edit}>Редактирование</p>
      <Switch
        className={styles.switch}
        block={true}
        checked={isSaveSample}
        label='Сохранить как шаблон'
        onChange={(e) => {
          if (e.target === e.currentTarget) {
            isSaveSample ? dispatch(offSaveSample()) : dispatch(onSaveSample());
          }
        }}
      />
      {isSaveSample && (
        <SelectDesktop
          className={styles.samples}
          optionClassName={styles.option}
          allowUnselect={true}
          size='m'
          options={dirOptions}
          placeholder='Выберите направление'
          label='Направления'
          Option={BaseOption}
          block={true}
          closeOnSelect={true}
          onChange={handleChange}
          selected={dirSample}
        />
      )}
      <TaskForm />
      <div className={styles.buttons}>
        <Button
          className={styles.button}
          view='primary'
          size='m'
          onClick={handleCancelClick}
        >
          Сохранить изменения
        </Button>
        <Button
          className={styles.button}
          view='secondary'
          size='m'
          onClick={handleCancelClick}
        >
          Отменить
        </Button>
      </div>
    </div>
  ) : (
    <div className={styles.about_task}>
      <p className={styles.title}>{task.title}</p>
      <p className={styles.description}>{task.description}</p>
      <a
        className={styles.link}
        href={task.linkURL}
        target='_blank'
        rel='noreferrer'
      >
        {task.linkURL}
      </a>
      <p className={styles.deadline}>{task.deadline}</p>
      <div className={styles.buttons}>
        <Button
          className={styles.button}
          view='primary'
          size='m'
          onClick={handleEditClick}
        >
          Редактировать
        </Button>
        <Button
          className={styles.button}
          view='secondary'
          size='m'
          onClick={handleDeleteClick}
        >
          Удалить
        </Button>
      </div>
    </div>
  );
}
