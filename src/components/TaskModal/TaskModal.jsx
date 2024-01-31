import { useDispatch, useSelector } from 'react-redux';
import { SidePanel } from '@alfalab/core-components/side-panel';

import { closeTaskModal, setDirSample } from '../../store/taskSlice';
import CreateTask from '../CreateTask/CreateTask';
import CreateSample from '../CreateSample/CreateSample';

import styles from './TaskModal.module.scss';
import TaskModalNav from '../TaskModalNav/TaskModalNav';

const TaskModal = () => {
  const dispatch = useDispatch();
  const { isNavItemActive, isOpenTaskModal } = useSelector(
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
          <TaskModalNav
            navItems={['Создать задачу', 'Использовать шаблон']}
            handleClose={handleClose}
          />
        </SidePanel.Header>
        <SidePanel.Content>
          {isNavItemActive === 'primary' ? (
            <CreateTask
              handleClose={handleClose}
              handleChange={handleChangeSelect}
            />
          ) : (
            <CreateSample
              handleClose={handleClose}
              handleChange={handleChangeSelect}
            />
          )}
        </SidePanel.Content>
      </SidePanel>
    </>
  );
};

export default TaskModal;
