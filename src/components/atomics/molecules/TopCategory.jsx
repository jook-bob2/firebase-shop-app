import React, { useEffect, useState } from 'react';
import { Link, createSearchParams } from 'react-router-dom';
import Span from '../atoms/Span';
import styles from '@styles/atomics/molecules/top-category.module.scss';
import { getCategoryList } from '@src/core/api/category/categoryApi';

export default function TopCategory() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchCategoryList();
  }, []);

  const fetchCategoryList = async () => {
    try {
      const response = await getCategoryList();
      setCategories(response);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <nav className={styles.wrapper}>
      <ul>
        {categories.map((top) => (
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
