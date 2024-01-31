import { useDispatch, useSelector } from 'react-redux';
import { CrossMIcon } from '@alfalab/icons-glyph/CrossMIcon';
import { IconButton } from '@alfalab/core-components/icon-button';

import { setIsNavItemActive } from '../../store/taskSlice';

import styles from './TaskModalNav.module.scss';

export default function TaskModalNav({ type, navItems, handleClose }) {
  const dispatch = useDispatch();
  const { typeTaskModal, isNavItemActive } = useSelector((state) => state.task);

  return (
    <div className={styles.navigation}>
      <IconButton size={32} icon={CrossMIcon} onClick={handleClose} />
      <div className={styles.wrapper}>
        <button
          className={`${styles.nav_button} ${
            isNavItemActive === 'primary' ? styles.active : ''
          }`}
          onClick={() => dispatch(setIsNavItemActive('primary'))}
        >
          {navItems[0]}
        </button>
        <button
          className={`${styles.nav_button} ${
            isNavItemActive === 'secondary' ? styles.active : ''
          }`}
          onClick={() => dispatch(setIsNavItemActive('secondary'))}
        >
          {navItems[1]}
        </button>
      </div>
    </div>
  );
}
