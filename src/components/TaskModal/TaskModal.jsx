import { useDispatch, useSelector } from 'react-redux';
import { SidePanel } from '@alfalab/core-components/side-panel';
import { CrossMIcon } from '@alfalab/icons-glyph/CrossMIcon';
import { IconButton } from '@alfalab/core-components/icon-button';

import {
  closeTaskModal,
  setIsActive,
  setDirSample,
} from '../../store/taskSlice';
import CreateTask from '../CreateTask/CreateTask';
import CreateSample from '../CreateSample/CreateSample';

import styles from './TaskModal.module.scss';

const TaskModal = () => {
  const dispatch = useDispatch();
  const { isActive, isOpenTaskModal } = useSelector((state) => state.task);

  const handleClose = () => {
    dispatch(closeTaskModal());
  };

  const handleChangeSelect = ({ selected }) => {
    dispatch(setDirSample(selected));
  };

  return (
    <>
      <SidePanel
        key={'getKey()'}
        open={isOpenTaskModal}
        onClose={handleClose}
        placement={'right'}
        nativeScrollbar={'native'}
      >
        <SidePanel.Header hasCloser={false}>
          <div className={styles.navigation}>
            <IconButton size={32} icon={CrossMIcon} onClick={handleClose} />
            <div className={styles.wrapper}>
              <button
                className={`${styles.nav_button} ${
                  isActive === 'task' ? styles.active : ''
                }`}
                onClick={() => dispatch(setIsActive('task'))}
              >
                Создать&nbsp;задачу
              </button>
              <button
                className={`${styles.nav_button} ${
                  isActive === 'sample' ? styles.active : ''
                }`}
                onClick={() => dispatch(setIsActive('sample'))}
              >
                Использовать&nbsp;шаблон
              </button>
            </div>
          </div>
        </SidePanel.Header>
        <SidePanel.Content>
          {isActive === 'task' ? (
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
