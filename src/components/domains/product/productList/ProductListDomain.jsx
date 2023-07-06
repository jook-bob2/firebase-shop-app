import React from 'react';
import ProductItems from '@src/components/atomics/organisms/ProductItems';
import {
  SUB_CATEGORY_LIST,
  TOP_CATEGORY_LIST,
} from '@src/constants/CATEGORY_LIST';
import { useSearchParams } from 'react-router-dom';
import '@styles/domains/product/product-list.module.scss';
import { PRODUCT_ITEM_MOCK_LIST } from '@src/mocks/productMock';

export default function ProductListDomain() {
  const [params] = useSearchParams();
  const topId = params.get('topId');
  const title = TOP_CATEGORY_LIST.find((top) => top.id === topId).name;
  const categoryList = [
    ...SUB_CATEGORY_LIST.filter((sub) => sub.topId === topId),
  ];

  return (
    <section>
      <ProductItems
        isSwiper
        itemList={PRODUCT_ITEM_MOCK_LIST}
        title={'핫이슈'}
      />
      <ProductItems
        title={title}
        isMore={true}
        isCategory={true}
        categoryList={[...categoryList]}
        itemList={PRODUCT_ITEM_MOCK_LIST}
      />
    </section>
  );
}
