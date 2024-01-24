import React from 'react';
import { CircularProgressBar } from '@alfalab/core-components-circular-progress-bar';

import iconCheck from '../../assets/img/icon-check.svg';
import iconDeadline from '../../assets/img/deadline-icon.svg';
import iconCheckSmall from '../../assets/img/icon-check-small.svg';
import iconDeadlineSmall from '../../assets/img/deadline-icon-small.svg';
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
  const [progressColor, setProgressColor] = React.useState('');
  const [contentColor, setContentColor] = React.useState();

  React.useEffect(() => {
    if (isDeadline) {
      setProgressColor('#FA9313');
    } else {
      setProgressColor('');
    }
  }, [isDeadline]);

  React.useEffect(() => {
    if (isSmall) {
      setContentColor('#0cc44d');
    }
    if (isNull) {
      setContentColor('#7d7d85');
    } else {
      setContentColor('#0e0e0e');
    }
  }, [isSmall, isNull]);

  const iconImage = () => {
    return <img src={isSmall ? iconDeadlineSmall : iconDeadline} alt='watch' />;
  };

  const iconCompleteImage = () => {
    return <img src={isSmall ? iconCheckSmall : iconCheck} alt='check-mark' />;
  };

  return !isNewCard ? (
    <CircularProgressBar
      className={isSmall ? styles.progressBarSmall : styles.progressBar}
      value={value}
      height={isSmall ? 64 : 128}
      size={isSmall ? 'm' : 'xl'}
      title={isSmall ? `${value}` : `${value}%`}
      icon={isDeadline && iconImage}
      iconComplete={isVerified && iconCompleteImage}
      progressStrokeColor={isCancel ? '#D2D3D9' : progressColor}
      contentColor={isCancel ? '#D2D3D9' : contentColor}
    />
  ) : (
    <img src={fakeBar} alt='progress-bar' />
  );
}

export default ProgressBar;
