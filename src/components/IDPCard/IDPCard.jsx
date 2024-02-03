import { useNavigate } from 'react-router-dom';

import { formatDate, hasComments } from '../../utils/utils';
import Dropmenu from '../Dropmenu/Dropmenu';
import ProgressBar from '../ProgressBar/ProgressBar';

import styles from './IDPCard.module.scss';

const IDPCard = ({ data }) => {
  const navigate = useNavigate();
  const isIDPdata = data.employee ? true : false;

  const isComments = isIDPdata ? hasComments(data.task) : false;
  const srcIDP = data.employee?.photo;

  const handleCardClick = () => {
    if (isIDPdata) {
      navigate(`/management/${data.employee.id}`);
    }
  };

  const handleSelectStatusClick = (e) => {
    e.stopPropagation();
  };

  return isIDPdata ? (
    <li
      className={`${styles.card} ${data.status && styles[data.status]} ${
        data.is_overdue && styles.expired
      }`}
      onClick={handleCardClick}
    >
      <img className={styles.img} src={srcIDP} alt='Аватар сотрудника' />
      <div className={styles.wrap}>
        <h2 className={styles.name}>{data.employee.name}</h2>
        <span
          className={`${styles.message} ${isComments && styles.full}`}
        ></span>
      </div>
      <p className={styles.job}>{data.employee.position}</p>
      <div className={styles.wrap_drop} onClick={handleSelectStatusClick}>
        <Dropmenu />
      </div>
      <p className={styles.title}>{data.goal}</p>
      <span className={styles.deadline}>
        {data.status === 'stoped'
          ? 'Отменён'
          : data.status === 'checked'
          ? `Проверен ${formatDate(data.deadline)}`
          : `До ${formatDate(data.deadline)}`}
      </span>
      <div className={styles.progress}>
        <ProgressBar
          isSmall={true}
          value={data.progress}
          isVerified={data.status === 'checked'}
          isDeadline={data.deadlineFlag}
          isCancel={data.status === 'stoped'}
          isNull={data.status === 'created'}
        />
      </div>
    </li>
  ) : (
    <li className={`${styles.card} ${styles.empty}`} onClick={handleCardClick}>
      <img
        className={styles.img}
        src={data.photo || ''}
        alt='Аватар сотрудника'
      />
      <div className={styles.wrap}>
        <h2 className={styles.name}>{data.name}</h2>
        <span className={styles.message}></span>
      </div>
      <p className={styles.job}>{data.position}</p>
      <div className={styles.wrap_drop} onClick={handleSelectStatusClick}>
        <button
          className={styles.button}
          type='button'
          onClick={() => navigate('/create-ipr')}
        />
      </div>
      <span className={styles.deadline}>Создать</span>
      <div className={styles.progress}>
        <ProgressBar
          isSmall={true}
          value={data.progress}
          isNewCard={!isIDPdata}
        />
      </div>
    </li>
  );
};

export default IDPCard;
