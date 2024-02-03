import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@alfalab/core-components/button';
import { Input } from '@alfalab/core-components/input';
import { Textarea } from '@alfalab/core-components/textarea';
import { UniversalDateInput } from '@alfalab/core-components/universal-date-input';

import ProgressBar from '../ProgressBar/ProgressBar';
import ConfirmPopup from '../ConfirmPopup/ConfirmPopup';
import Helper from '../Helper/Helper';
import { closeConfirmPopup, toggleClickButtonOk } from '../../store/modalSlice';
import styles from './IPRCard.module.scss';

function IPRCard({ title }) {
  const [dataValue, setDataValue] = useState('');
  const [titleValue, setTitleValue] = useState('');
  const [descriptionValue, setDescriptionValue] = useState('');
  const { dataInfo } = useSelector((state) => state.modal);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const handleClickOk = () => {
    dispatch(toggleClickButtonOk());
    dispatch(closeConfirmPopup());
    navigate(-1);
  };

  const handleChangeDataInput = (_, { value }) => {
    setDataValue(value);
    //setTitleValue(value);
    //setDescriptionValue(value);
  };

  return (
    <>
      <article className={styles.card}>
        <h3>{title}</h3>
        <div className={styles.container}>
          <form id='ipr-form' className={styles.form}>
            <Input
              name='title-IPR'
              label='Название ИПР'
              block
              type='text'
              size='m'
              value={titleValue}
              //onChange={}
            />
            <Input
              name='description-IPR'
              label='Цель'
              block
              type='text'
              size='m'
              value={descriptionValue}
              //onChange={}
            />
            <Textarea
              label={'Описание'}
              autosize={false}
              minRows={3}
              block={true}
            />
            <UniversalDateInput
              block={false}
              view='date'
              label='Дeдлайн ИПР'
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
          {pathname === '/create-ipr' ? (
            <Helper
              title='Принципы заполнения ИПР'
              advices={['заполнить все поля', 'создать хотя бы одну задачу']}
              type='list'
            />
          ) : (
            <ProgressBar />
          )}
        </div>
        {pathname === '/create-ipr' ? (
          <Button
            type='submit'
            form='ipr-form'
            className={styles.button}
            view='accent'
            name='create'
            disabled
          >
            Создать
          </Button>
        ) : (
          <div
            style={{
              width: 382,
              justifyContent: 'space-between',
              display: 'flex',
            }}
          >
            <Button
              view='primary'
              size='m'
              name='save-changes'
              className={styles.button_save}
            >
              Сохранить изменения
            </Button>
            <Button
              type='button'
              view='tertiary'
              size='m'
              name='cancel'
              className={styles.button_cancel}
              onClick={() => dispatch(closeConfirmPopup())}
            >
              Отменить
            </Button>
          </div>
        )}
      </article>
      {dataInfo.title === 'Вы уверены, что хотите прекратить создание ИПР?' && (
        <ConfirmPopup onClickOk={handleClickOk} />
      )}
    </>
  );
}

export default IPRCard;
