import React from 'react';
import Span from '../atoms/Span';
import styles from '@styles/atomics/molecules/title.module.scss';

export default function Title({ children }) {
  return (
    <div className={styles.wrap}>
      <Span>{children}</Span>
    </div>
  );
}
