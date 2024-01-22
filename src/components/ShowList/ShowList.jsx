import IDPCard from '../IDPCard/IDPCard';
import styles from './ShowList.module.scss';

const ShowList = ({ type = 'IDP', cards }) => {
  return (
    <ul className={styles.list}>
      {cards.map((card) => {
        return type === 'IDP' ? (
          <IDPCard key={card.id} data={card} />
        ) : (
          // <TaskCard key={card.id} card={card} />
          <p>тут пока пусто</p>
        );
      })}
    </ul>
  );
};

export default ShowList;
