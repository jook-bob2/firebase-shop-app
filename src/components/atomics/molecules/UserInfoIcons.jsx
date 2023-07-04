import React from 'react';
import styles from '@styles/atomics/molecules/user-info-icons.module.scss';
import { Link } from 'react-router-dom';
import Icon from '../atoms/Icon';
import { useUser } from '@src/core/store/providers/UserProvider';

export default function UserInfoIcons() {
  const { isUser, initUser } = useUser();

  return (
    <div className={styles.wrapper}>
      {isUser ? (
        <button onClick={() => initUser()}>
          <Icon name={'sign-out'} size={'xl'} color="#000" />
        </button>
      ) : (
        <Link to={{ pathname: '/user/sign-in' }}>
          <Icon name={'user'} size={'xl'} color="#000" />
        </Link>
      )}
    </div>
  );
}
