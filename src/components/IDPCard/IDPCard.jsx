import { useNavigate } from 'react-router-dom';

import { formatDate } from '../../utils/utils';
import Dropmenu from '../Dropmenu/Dropmenu';
import ProgressBar from '../ProgressBar/ProgressBar';

import styles from './IDPCard.module.scss';

const IDPCard = ({ data }) => {
  const navigate = useNavigate();

  const isExpired = data.deadlineFlag ? 'expired' : '';
  const isEmpty = data.status ? '' : 'empty';

  const handleCardClick = () => {
    if (!isEmpty) {
      navigate(`/management/${data.id}`);
    }
  };

  const handleSelectStatusClick = (e) => {
    e.stopPropagation();
  };

  return (
    <li
      className={`${styles.card} ${data.status && styles[data.status]} ${
        isExpired && styles[isExpired]
      } ${isEmpty && styles[isEmpty]}`}
      onClick={handleCardClick}
    >
      <img className={styles.img} src={data.avatar} alt='Аватар сотрудника' />
      <div className={styles.wrap}>
        <h2 className={styles.name}>{data.employeeName}</h2>
        <span
          className={`${styles.message} ${data.messageFlag && styles.full}`}
        ></span>
      </div>
      <p className={styles.job}>{data.employeeJob}</p>
      <div className={styles.wrap_drop} onClick={handleSelectStatusClick}>
        {isEmpty ? (
          <button
            className={styles.button}
            type='button'
            onClick={() => navigate('/create-ipr')}
          />
        ) : (
          <Dropmenu />
        )}
      </div>
      <p className={styles.title}>{data.goal}</p>
      <span className={styles.deadline}>
        {isEmpty
          ? 'Создать'
          : data.status === 'Canceled'
          ? 'Отменён'
          : data.status === 'Checked'
          ? `Проверен ${formatDate(data.deadline)}`
          : `До ${formatDate(data.deadline)}`}
      </span>
      <div className={styles.progress}>
        <ProgressBar
          isSmall={true}
          value={data.progress}
          isVerified={data.status === 'Checked'}
          isDeadline={data.deadlineFlag}
          isCancel={data.status === 'Canceled'}
          isNewCard={isEmpty}
          isNull={data.status === 'Created'}
        />
      </div>
    </li>
  );
};

export default IDPCard;
