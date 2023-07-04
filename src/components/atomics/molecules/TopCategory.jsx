import { TOP_CATEGORY_LIST } from '@src/constants/CATEGORY_LIST';
import React from 'react';
import { Link, createSearchParams } from 'react-router-dom';
import Span from '../atoms/Span';
import styles from '@styles/atomics/molecules/top-category.module.scss';

export default function TopCategory() {
  return (
    <nav className={styles.wrapper}>
      <ul>
        {TOP_CATEGORY_LIST.map((top) => (
          <li key={top.id}>
            <Link
              to={{
                pathname: '/product',
                search: `?${createSearchParams({ topId: top.id })}`,
              }}
            >
              <Span>{top.name}</Span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
