import BackLink from '../../components/BackLink/BackLink';
import ShowList from '../../components/ShowList/ShowList';
import { IDPcardsData } from '../../utils/data';
import styles from './Leader.module.scss';

const Leader = () => {
  return (
    <section className={styles.leader}>
      <BackLink text='Назад' link='/' />
      <h1 className={styles.leader__title}>
        Индивидуальные планы развития для сотрудников
      </h1>
      <ShowList cards={IDPcardsData} />
    </section>
  );
};

export default Leader;
