import React, { useCallback } from 'react';
import styles from '@styles/atomics/atoms/input.module.scss';
import classNames from 'classnames';

export default function Input({
  onChange,
  name,
  id,
  value,
  setValue,
  maxLength,
  placeholder,
  className,
  wrapperClass,
  type = 'text',
  autoComplete,
  ...props
}) {
  const onChangeInput =
    onChange ||
    useCallback((e) => {
      setValue(e.target.value);
    }, []);

  return (
    <div className={classNames(styles.wrapper, wrapperClass)}>
      <input
        type={type}
        onChange={onChangeInput}
        value={value}
        id={id}
        name={name}
        maxLength={maxLength}
        placeholder={placeholder}
        className={className}
        autoComplete={autoComplete}
        {...props}
      />
    </div>
  );
}
