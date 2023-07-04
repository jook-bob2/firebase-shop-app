import React from 'react';
import styles from '@styles/atomics/templates/layouts/adm/adm-layout.module.scss';
import AdmHeader from '../../organisms/adm/AdmHeader';

export default function AdmLayout({ children }) {
  return (
    <div className={styles.container}>
      <AdmHeader />
      <main>{children}</main>
    </div>
  );
}
