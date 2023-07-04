import React from 'react';
import styles from '@styles/atomics/molecules/more-button.module.scss';

export default function MoreButton({ onClick }) {
  return (
    <div className={styles.wrap}>
      <button onClick={onClick}>더보기 {'>'}</button>
    </div>
  );
}
