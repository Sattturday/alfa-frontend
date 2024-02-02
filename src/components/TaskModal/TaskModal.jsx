import { useDispatch, useSelector } from 'react-redux';
import { SidePanel } from '@alfalab/core-components/side-panel';

import { closeTaskModal, setDirSample } from '../../store/taskSlice';
import CreateTask from '../CreateTask/CreateTask';
import CreateSample from '../CreateSample/CreateSample';
import TaskModalNav from '../TaskModalNav/TaskModalNav';
import AboutTask from '../AboutTask/AboutTask';
import Comments from '../Comments/Comments';

import styles from './TaskModal.module.scss';
import CommentsList from '../CommentsList/CommentsList';

const TaskModal = () => {
  const dispatch = useDispatch();
  const { typeTaskModal, isNavItemActive, isOpenTaskModal } = useSelector(
    (state) => state.task
  );

  const handleClose = () => {
    dispatch(closeTaskModal());
  };

  const handleChangeSelect = ({ selected }) => {
    dispatch(setDirSample(selected));
  };

  return (
    <>
      <SidePanel
        className={styles.panel}
        key={'getKey()'}
        open={isOpenTaskModal}
        onClose={handleClose}
        placement={'right'}
        nativeScrollbar={'native'}
      >
        <SidePanel.Header hasCloser={false}>
          {typeTaskModal === 'createTask' ? (
            <TaskModalNav
              navItems={['Создать задачу', 'Использовать шаблон']}
              handleClose={handleClose}
            />
          ) : typeTaskModal === 'aboutTask' ? (
            <TaskModalNav
              navItems={['О задаче', 'Комментарии']}
              handleClose={handleClose}
            />
          ) : (
            <TaskModalNav
              navItems={['Все комментарии']}
              handleClose={handleClose}
            />
          )}
        </SidePanel.Header>
        <SidePanel.Content>
          {typeTaskModal === 'createTask' &&
            (isNavItemActive === 'primary' ? (
              <CreateTask
                handleClose={handleClose}
                handleChange={handleChangeSelect}
              />
            ) : (
              <CreateSample
                handleClose={handleClose}
                handleChange={handleChangeSelect}
              />
            ))}
          {typeTaskModal === 'aboutTask' &&
            (isNavItemActive === 'primary' ? (
              <AboutTask handleChange={handleChangeSelect} />
            ) : (
              <Comments />
            ))}
          {typeTaskModal === 'allComments' && <CommentsList />}
        </SidePanel.Content>
      </SidePanel>
    </>
  );
};

export default TaskModal;
