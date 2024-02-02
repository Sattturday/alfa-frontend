import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { CrossMIcon } from '@alfalab/icons-glyph/CrossMIcon';
import { IconButton } from '@alfalab/core-components/icon-button';

import { setIsNavItemActive } from '../../store/taskSlice';
import BackLink from '../BackLink/BackLink';

import styles from './TaskModalNav.module.scss';

export default function TaskModalNav({ navItems, handleClose }) {
  const dispatch = useDispatch();
  const { isBack, typeTaskModal, isNavItemActive } = useSelector(
    (state) => state.task
  );
  const { pathname } = useLocation();

  return (
    <div
      className={`${styles.navigation} ${
        typeTaskModal && styles[typeTaskModal]
      }`}
    >
      <div className={styles.wrap_nav}>
        {isBack ? (
          <BackLink link={pathname} type='allComments' />
        ) : (
          <span></span>
        )}
        <IconButton size={32} icon={CrossMIcon} onClick={handleClose} />
      </div>
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
