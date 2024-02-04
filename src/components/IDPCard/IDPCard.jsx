import { useNavigate } from 'react-router-dom';

import { formatDate } from '../../utils/utils';
import Dropmenu from '../Dropmenu/Dropmenu';
import ProgressBar from '../ProgressBar/ProgressBar';

import styles from './IDPCard.module.scss';

const IDPCard = ({ data }) => {
  const navigate = useNavigate();
  const isIDPdata = data.ipr.length !== 0 ? true : false;

  const srcIDP = data?.photo;

  const handleCardClick = () => {
    if (isIDPdata) {
      navigate(`/management/${data.id}`);
    }
  };

  const handleSelectStatusClick = (e) => {
    e.stopPropagation();
  };

  return isIDPdata ? (
    <li
      className={`${styles.card} ${data.ipr.status && styles[data.status]} ${
        data.is_overdue && styles.expired
      }`}
      onClick={handleCardClick}
    >
      <img className={styles.img} src={srcIDP} alt='Аватар сотрудника' />
      <div className={styles.wrap}>
        <h2 className={styles.name}>{data.name}</h2>
        <span
          className={`${styles.message} ${
            data.ipr.is_commented && styles.full
          }`}
        ></span>
      </div>
      <p className={styles.job}>{data.position}</p>
      <div className={styles.wrap_drop} onClick={handleSelectStatusClick}>
        <Dropmenu />
      </div>
      <p className={styles.title}>{data.ipr.goal}</p>
      <span className={styles.ipr.deadline}>
        {data.ipr.status === 'stoped'
          ? 'Отменён'
          : data.ipr.status === 'checked'
          ? `Проверен ${formatDate(data.ipr.deadline)}`
          : `До ${formatDate(data.ipr.deadline)}`}
      </span>
      <div className={styles.progress}>
        <ProgressBar
          isSmall={true}
          value={data.ipr.progress}
          isVerified={data.ipr.status === 'checked'}
          isDeadline={data.ipr.is_out_if_date}
          isCancel={data.ipr.status === 'stoped'}
          isNull={data.ipr.status === 'created'}
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
        <ProgressBar isSmall={true} isNewCard={!isIDPdata} />
      </div>
    </li>
  );
};

export default IDPCard;
