import React from 'react';
import styles from '@styles/atomics/templates/not-found.module.scss'; // SCSS 모듈을 import합니다.

const NotFound = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>404</h1>
      <p className={styles.description}>페이지를 찾을 수 없습니다.</p>
      {/* 그 외에 추가적인 내용을 원하시면 이곳에 작성하세요 */}
    </div>
  );
};

export default NotFound;
