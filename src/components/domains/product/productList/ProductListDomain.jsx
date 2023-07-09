import React, { useEffect, useState } from 'react';
import ProductItems from '@src/components/atomics/organisms/ProductItems';
import {} from '@src/constants/CATEGORY_LIST';
import { useSearchParams } from 'react-router-dom';
import '@styles/domains/product/product-list.module.scss';
import {
  getPopularList,
  getProductList,
} from '@src/core/api/product/productApi';
import { getCategoryItem } from '@src/core/api/category/categoryApi';

export default function ProductListDomain() {
  const [params] = useSearchParams();
  const topId = params.get('topId');
  const [productList, setProductList] = useState([]);
  const [categoryList, setCategoryList] = useState([]);
  const [popularList, setPopularList] = useState([]);
  const [title, setTile] = useState('');

  useEffect(() => {
    fetchPopularList();
  }, []);

  useEffect(() => {
    fetchProductList();
  }, [topId]);

  const fetchProductList = async () => {
    try {
      const products = await getProductList(topId);
      setProductList(products);
      const categoryItem = await getCategoryItem(topId);
      setCategoryList(categoryItem?.subCategories || []);
      setTile(categoryItem.name);
    } catch (err) {
      console.error('Products error ', err);
    }
  };

  const fetchPopularList = async () => {
    try {
      const popular = await getPopularList();
      setPopularList(popular);
    } catch (err) {
      console.error('Issue error ', err);
    }
  };

  return (
    <section>
      <ProductItems isSwiper itemList={popularList} title={'인기아이템'} />
      <ProductItems
        title={title}
        isMore={true}
        isCategory={true}
        categoryList={categoryList}
        itemList={productList}
      />
    </section>
  );
}
