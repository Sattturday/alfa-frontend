import { useSelector } from 'react-redux';
import { SelectDesktop } from '@alfalab/core-components/select/desktop';
import { BaseOption } from '@alfalab/core-components/select/shared';
import { Button } from '@alfalab/core-components/button';

import { dirAllOptions, samplesData } from '../../utils/data';
import SampleList from '../SampleList/SampleList';
import TaskForm from '../TaskForm/TaskForm';

import styles from './CreateSample.module.scss';

const CreateSample = ({ handleClose, handleChange }) => {
  const { dirSample } = useSelector((state) => state.task);

  const handleChangeSelect = (sample) => {
    console.log(sample);
  };

  return (
    <div className={styles.create_sample}>
      <SelectDesktop
        className={styles.samples}
        optionClassName={styles.option}
        optionsListClassName={styles.list}
        allowUnselect={true}
        size='m'
        options={dirAllOptions}
        placeholder='Все'
        label='Направления'
        Option={BaseOption}
        block={true}
        closeOnSelect={true}
        onChange={handleChange}
        selected={dirSample}
      />
      <SampleList samples={samplesData} handleSelect={handleChangeSelect} />
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

export default CreateSample;
