import React from 'react';
import Img from '../atoms/Img';
import Span from '../atoms/Span';
import styles from '@styles/atomics/molecules/product-info.module.scss';
import { createSearchParams, Link } from 'react-router-dom';

export default function ProductInfo({ name, src, onError, price, productId }) {
  return (
    <div className={styles.wrap}>
      <div className={styles.img_area}>
        <Link
          to={{
            pathname: '/product/detail',
            search: `?${createSearchParams({ productId })}`,
          }}
        >
          <Img src={src} onError={onError} width={192} />
        </Link>
      </div>
      <div className={styles.info_area}>
        <Span>{name}</Span>
        <Span>{price}</Span>
      </div>
    </div>
  );
}
