import { useLocation } from 'react-router-dom';

import IDPCard from '../IDPCard/IDPCard';
import TaskCard from '../TaskCard/TaskCard';
import AddTaskButton from '../AddTaskButton/AddTaskButton';

import styles from './ShowList.module.scss';

const ShowList = ({ type = 'IDP', cards }) => {
  const { pathname } = useLocation();

  return (
    <ul className={styles.list}>
      {(pathname === '/management' || pathname === '/create-ipr') && (
        <AddTaskButton isActive={true} />
      )}
      {cards?.map((card, index) => {
        return type === 'IDP' ? (
          <IDPCard key={index} data={card} />
        ) : (
          <TaskCard key={card.id} card={card} />
        );
      })}
    </ul>
  );
};

export default ShowList;
