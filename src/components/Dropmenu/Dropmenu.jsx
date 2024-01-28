import { useRef, useState } from 'react';

import { useClickOutside } from '../../hooks/useClickOutside';
import { actionButtons } from '../../utils/data';

import styles from './Dropmenu.module.scss';

const Dropmenu = () => {
  const [isActive, setIsActive] = useState(false);
  const [ordering, setOrdering] = useState(false);
  const actionRef = useRef(null);

  // Использование кастомного хука, который определяет клик вне определенной области
  useClickOutside(actionRef, () => {
    if (isActive) setTimeout(() => setIsActive(false), 200);
  });

  // Обработчик клика для открытия/закрытия панели сортировки
  const onClickNavTab = () => {
    setIsActive(!isActive);
  };

  // Обработчик сортировки при выборе опции сортировки
  const onClickActionHandler = (e) => {
    setOrdering(e.target.id);
    console.log(e.target.id);
    onClickNavTab();
  };

  return (
    <div
      className={`${styles.dropmenu} ${isActive ? styles.active : ''}`}
      ref={actionRef}
    >
      <button
        className={`${styles.button} ${isActive ? styles.active : ''}`}
        onClick={onClickNavTab}
      />
      {/* Список опций сортировки */}
      <ul className={`${styles.list} ${isActive ? styles.active : ''}`}>
        {/* Перебор sortButtons для отображения отдельных опций сортировки */}
        {actionButtons.map((button) => {
          return (
            <li className={styles.item} key={button.id}>
              {/* Кнопка, представляющая каждую опцию сортировки */}
              <label className={styles.label}>
                <input
                  id={button.id}
                  className={styles.radio}
                  type='radio'
                  name={button.id}
                  checked={ordering === button.id}
                  onChange={onClickActionHandler}
                />
                <span>{button.title}</span>
              </label>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Dropmenu;
