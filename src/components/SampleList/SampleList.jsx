import { useState } from 'react';
import styles from './SampleList.module.scss';

const SampleList = ({ samples, handleSelect }) => {
  const [isActive, setIsActive] = useState('');

  const handleClick = (sample) => {
    setIsActive(sample.id);
    handleSelect(sample);
  };

  return (
    <div className={styles.box}>
      <ul className={styles.list}>
        {samples.map((sample) => {
          return (
            <li
              key={sample.id}
              className={`${styles.item} ${
                isActive === sample.id && styles.active
              }`}
              onClick={() => handleClick(sample)}
            >
              <p>{sample.title}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SampleList;
