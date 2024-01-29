import { Input } from '@alfalab/core-components/input';
import { Textarea } from '@alfalab/core-components/textarea';
import { UniversalDateInput } from '@alfalab/core-components/universal-date-input';

import styles from './TaskForm.module.scss';
import { useState } from 'react';

const TaskForm = () => {
  const [dataValue, setDataValue] = useState('');
  const [titleValue, setTitleValue] = useState('');
  const [descriptionValue, setDescriptionValue] = useState('');

  const handleChangeDataInput = (_, { value }) => {
    setDataValue(value);
    //setTitleValue(value);
    //setDescriptionValue(value);
  };

  return (
    <form id='task-form' className={styles.form}>
      <Input
        name='name'
        label='Название задачи'
        block
        type='text'
        size='m'
        value={titleValue}
        //onChange={}
      />
      <Textarea label={'Описание'} autosize={false} minRows={3} block={true} />
      <Input
        name='link'
        label='Ссылка'
        block
        type='text'
        size='m'
        value={descriptionValue}
        //onChange={}
      />
      <UniversalDateInput
        block={false}
        view='date'
        label='Дедлайн задачи'
        labelView='inner'
        size='m'
        className={styles.input_date}
        picker={true}
        value={dataValue}
        onChange={handleChangeDataInput}
        clear={false}
        onClear={(e) => {
          e.stopPropagation();
          setDataValue('');
        }}
      />
    </form>
  );
};

export default TaskForm;
