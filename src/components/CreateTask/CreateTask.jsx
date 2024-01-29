import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@alfalab/core-components/button';
import { Switch } from '@alfalab/core-components/switch';
import { SelectDesktop } from '@alfalab/core-components/select/desktop';
import { BaseOption } from '@alfalab/core-components/select/shared';

import { offSaveSample, onSaveSample } from '../../store/taskSlice';
import { dirOptions } from '../../utils/data';
import Helper from '../Helper/Helper';
import TaskForm from '../TaskForm/TaskForm';

import styles from './CreateTask.module.scss';

const CreateTask = ({ handleClose, handleChange }) => {
  const dispatch = useDispatch();
  const { isSaveSample, dirSample } = useSelector((state) => state.task);

  return (
    <div className={styles.create_task}>
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
        <>
          <Helper
            title='Чтобы создать шаблон'
            advices={['выберите направление']}
          />
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
        </>
      )}
      <Helper title='Чтобы создать задачу' advices={['введите название']} />
      <TaskForm />
      <Button
        className={styles.button}
        view='primary'
        size='m'
        onClick={handleClose}
      >
        Добавить задачу
      </Button>
    </div>
  );
};

export default CreateTask;
