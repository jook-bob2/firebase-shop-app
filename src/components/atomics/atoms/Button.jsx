import React from 'react';
import styles from '@styles/atomics/atoms/button.module.scss';
import classNames from 'classnames';

export default function Button({
  children,
  onClick,
  className,
  wrapperClass,
  type = 'button',
  ...props
}) {
  return (
    <div className={classNames(styles.wrapper, wrapperClass)}>
      <button type={type} onClick={onClick} className={className} {...props}>
        {children}
      </button>
    </div>
  );
}
