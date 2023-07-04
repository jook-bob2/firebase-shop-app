import React from 'react';
import Button from '../atoms/Button';
import styles from '@styles/atomics/molecules/category-button.module.scss';

export default function CategoryButton({ children }) {
  return (
    <div className={styles.wrap}>
      <Button wrapperClass={styles.button_wrap} className={styles.button_class}>
        {children}
      </Button>
    </div>
  );
}
