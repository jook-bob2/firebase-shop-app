import React from 'react';
import styles from '@styles/atomics/templates/layouts/user/user-header.module.scss';
import SearchInput from '../../molecules/SearchInput';
import Logo from '../../atoms/Logo';
import UserInfoIcons from '../../molecules/UserInfoIcons';
import { useUser } from '@src/core/store/providers/UserProvider';
import { Link } from 'react-router-dom';

export default function UserHeader() {
  const { userState, isUser, isAdmin } = useUser();

  return (
    <header>
      <div className={styles.center}>
        <Logo />
      </div>
      <div className={styles.wrap}>
        <div>
          <SearchInput />
        </div>
        <div className={styles.user_info_wrap}>
          {isUser && (
            <>
              {isAdmin && (
                <Link to={{ pathname: '/adm/product-mngt/write' }}>
                  상품등록
                </Link>
              )}

              <span>{userState.name}님 </span>
            </>
          )}
          <UserInfoIcons />
        </div>
      </div>
    </header>
  );
}
