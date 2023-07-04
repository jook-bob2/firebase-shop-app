import React from 'react';
import UserFooter from '../../organisms/user/UserFooter';
import UserHeader from '../../organisms/user/UserHeader';
import styles from '@styles/atomics/templates/layouts/user/user-layout.module.scss';
import TopCategory from '../../molecules/TopCategory';

export default function MainLayout({ children }) {
  return (
    <div className={styles.container}>
      <UserHeader />
      <TopCategory />
      <main>{children}</main>
      <UserFooter />
    </div>
  );
}
