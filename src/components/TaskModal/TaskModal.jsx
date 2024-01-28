import { useDispatch, useSelector } from 'react-redux';
import { SidePanel } from '@alfalab/core-components/side-panel';
import { Button } from '@alfalab/core-components/button';
import { CrossMIcon } from '@alfalab/icons-glyph/CrossMIcon';
import { IconButton } from '@alfalab/core-components/icon-button';

import { closeTaskModal, setIsActive } from '../../store/taskSlice';
import Helper from '../Helper/Helper';
import styles from './TaskModal.module.scss';

const TaskModal = () => {
  const dispatch = useDispatch();
  const { isActive, isOpenTaskModal } = useSelector((state) => state.task);

  const handleClose = () => {
    dispatch(closeTaskModal());
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
          <div>
            <Helper
              title='Чтобы создать задачу'
              advices={['введите название']}
            />
          </div>
        </SidePanel.Content>
        <SidePanel.Footer>
          <SidePanel.Controls
            primary={
              <Button view='primary' size='s' onClick={handleClose}>
                Primary
              </Button>
            }
          />
        </SidePanel.Footer>
      </SidePanel>
    </>
  );
};

export default TaskModal;
