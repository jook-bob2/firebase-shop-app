import React, { useEffect, useState } from 'react';
import ProductItems from '@src/components/atomics/organisms/ProductItems';
import {
  getPopularList,
  getProductList,
} from '@src/core/api/product/productApi';
import { getCategoryList } from '@src/core/api/category/categoryApi';

export default function HomeDomain() {
  const [popularList, setPopularList] = useState([]);
  const [productAllList, setProductAllList] = useState([]);

  useEffect(() => {
    init();
  }, []);

  const init = async () => {
    try {
      const popular = await getPopularList();
      setPopularList(popular);
    } catch (err) {
      console.error('Popular error ', err);
    }

    try {
      const categories = await getCategoryList();
      const arr = [];

      if (categories.length > 0) {
        for (const category of categories) {
          const title = category.name;
          const products = await getProductList(category.id);
          arr.push({ title, productList: products });
        }
        setProductAllList([...arr]);
      }
    } catch (err) {
      console.error('Category error ', err);
    }
  };

  return (
    <section>
      <ProductItems isSwiper itemList={popularList} title={'인기아이템'} />
      {productAllList.map((all, index) => (
        <ProductItems
          key={index}
          itemList={all.productList}
          title={all.title}
        />
      ))}
    </section>
  );
}
