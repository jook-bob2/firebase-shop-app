import React from 'react';
import styles from '@styles/atomics/molecules/user-info-icons.module.scss';
import { Link, useNavigate } from 'react-router-dom';
import Icon from '../atoms/Icon';
import { useUser } from '@src/core/store/providers/UserProvider';
import { postSignOut } from '@src/core/api/user/userApi';

export default function UserInfoIcons() {
  const { isUser, initUser } = useUser();
  const navigate = useNavigate();

  const onClickSignOut = () => {
    postSignOut();
    initUser();
    navigate('/');
  };

  return (
    <div className={styles.wrapper}>
      {isUser ? (
        <button onClick={() => onClickSignOut()}>
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
