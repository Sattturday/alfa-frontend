import { useState } from 'react';
import { SidePanel } from '@alfalab/core-components/side-panel';
import { Button } from '@alfalab/core-components/button';
import styles from './TaskModal.module.scss';
import { CrossMIcon } from '@alfalab/icons-glyph/CrossMIcon';
import { IconButton } from '@alfalab/core-components/icon-button';
import Helper from '../Helper/Helper';

const TaskModal = () => {
  const [open, setOpen] = useState(false);
  const [isActive, setIsActive] = useState('task');
  const handleOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);

  return (
    <>
      {/* <Button view='primary' size='s' onClick={handleOpen}>
        Primary
      </Button> */}
      <SidePanel
        key={'getKey()'}
        open={open}
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
                onClick={() => setIsActive('task')}
              >
                Создать&nbsp;задачу
              </button>
              <button
                className={`${styles.nav_button} ${
                  isActive === 'sample' ? styles.active : ''
                }`}
                onClick={() => setIsActive('sample')}
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
