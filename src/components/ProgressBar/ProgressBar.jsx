import React, { useEffect, useState } from 'react';
import { CircularProgressBar } from '@alfalab/core-components/circular-progress-bar';

import iconCheck from '../../assets/img/icon-check.svg';
import iconCheckSmall from '../../assets/img/icon-check-small.svg';
import fakeBar from '../../assets/img/fake-progress-bar.svg';

import styles from './ProgressBar.module.scss';

function ProgressBar({
  isSmall,
  value,
  isVerified,
  isDeadline = false,
  isCancel = false,
  isNewCard = false,
  isNull = false,
}) {
  const [progressColor, setProgressColor] = useState('');
  const [contentColor, setContentColor] = useState();

  useEffect(() => {
    if (isDeadline) {
      setProgressColor('#FA9313');
    } else {
      setProgressColor('');
    }
  }, [isDeadline]);

  useEffect(() => {
    if (isSmall && isDeadline) {
      setContentColor('#FA9313');
    } else if (isSmall) {
      setContentColor('#0cc44d');
    } else if (isNull) {
      setContentColor('#7d7d85');
    } else {
      setContentColor('#0e0e0e');
    }
  }, [isSmall, isNull, isDeadline]);

  const iconCompleteImage = () => {
    return <img src={isSmall ? iconCheckSmall : iconCheck} alt='check-mark' />;
  };

  return !isNewCard ? (
    <CircularProgressBar
      className={isSmall ? styles.progressBarSmall : styles.progressBar}
      value={value}
      height={isSmall ? 64 : 128}
      size='xl'
      title={isSmall ? `${value}` : `${value}%`}
      iconComplete={isVerified && iconCompleteImage}
      progressStrokeColor={isCancel ? '#D2D3D9' : progressColor}
      contentColor={isCancel ? '#D2D3D9' : contentColor}
    />
  ) : (
    <img src={fakeBar} alt='progress-bar' />
  );
}

export default ProgressBar;
