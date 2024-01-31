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
      {cards?.map((card) => {
        const user = card.employeeId === card.id;
        return type === 'IDP' ? (
          <IDPCard key={card.id} data={card} />
        ) : user ? (
          <TaskCard key={card.employeeId} card={card} />
        ) : (
          ''
        );
      })}
    </ul>
  );
};

export default ShowList;
