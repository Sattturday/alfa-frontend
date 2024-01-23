import Dropmenu from '../Dropmenu/Dropmenu';
import styles from './IDPCard.module.scss';

const IDPCard = ({ data }) => {
  return (
    <li className={styles.card}>
      <img
        className={styles.card__img}
        src={data.avatar}
        alt='Аватар сотрудника'
      />
      <h2 className={styles.card__name}>
        {data.employeeName}
        <span className={styles.card__message}></span>{' '}
      </h2>
      <p className={styles.card__job}>{data.employeeJob}</p>
      <Dropmenu />
      <p className={styles.card__title}>{data.goal}</p>
      <span className={styles.card__deadline}>До {data.deadline}</span>
      {/* Заглушка на месте прогресс бара */}
      <div className={styles.card__progress}></div>
    </li>
  );
};

export default IDPCard;
