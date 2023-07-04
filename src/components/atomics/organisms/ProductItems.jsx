import React from 'react';
import CategoryButton from '../molecules/CategoryButton';
import MoreButton from '../molecules/MoreButton';
import ProductInfo from '../molecules/ProductInfo';
import Title from '../molecules/Title';
import styles from '@styles/atomics/organisms/product-items.module.scss';

export default function ProductItems({
  title,
  itemList,
  isMore,
  isCategory,
  categoryList,
}) {
  return (
    <div className={styles.wrap}>
      {/* 타이틀 */}
      <Title>{title}</Title>
      {/* 카테고리 목록 */}
      <div className={styles.contents}>
        <div className={styles.first}>
          {isCategory &&
            categoryList?.length > 0 &&
            categoryList.map((item, index) => (
              <CategoryButton key={index}>{item.name}</CategoryButton>
            ))}
        </div>
        <div className={styles.second}>
          {/* 더보기 버튼 */}
          {isMore && <MoreButton onClick={() => console.log('더보기')} />}
        </div>
        <div className={styles.third}>
          {/* 아이템 목록 */}
          {itemList?.length > 0 &&
            itemList.map((item, index) => (
              <div key={index}>
                <ProductInfo
                  productId={item.productId}
                  name={item.name}
                  onError={item.onError}
                  price={item.price}
                  src={item.image}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
