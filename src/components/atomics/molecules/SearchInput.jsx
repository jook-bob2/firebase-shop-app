import React, { useCallback } from 'react';
import Icon from '../atoms/Icon';
import styles from '@styles/atomics/molecules/search-input.module.scss';

export default function SearchInput({ onChange, setValue, value }) {
  const onClickSearch = () => {
    console.log('search');
  };

  const onChangeInput = () =>
    onChange ||
    useCallback((e) => {
      setValue(e.target.value);
    }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.btn_area}>
        <button onClick={() => onClickSearch()}>
          <Icon name={'search-input'} size={'sm'} isActive={true} />
        </button>
        <input onChange={onChangeInput} value={value} />
      </div>
    </div>
  );
}
