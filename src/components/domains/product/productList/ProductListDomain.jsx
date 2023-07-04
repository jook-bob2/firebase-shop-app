import ProductItems from '@src/components/atomics/organisms/ProductItems';
import {
  SUB_CATEGORY_LIST,
  TOP_CATEGORY_LIST,
} from '@src/constants/CATEGORY_LIST';
import React from 'react';
import { useSearchParams } from 'react-router-dom';
import '@styles/domains/product/product-list.module.scss';

const NO_IMAGE = '/public/images/no_image.webp';
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
        title={title}
        isMore={true}
        isCategory={true}
        categoryList={[...categoryList]}
        itemList={[
          {
            productId: '1',
            name: '옷1',
            price: '3000',
            image: NO_IMAGE,
          },
          {
            productId: '2',
            name: '옷2',
            price: '2000',
            image: NO_IMAGE,
          },
        ]}
      />
    </section>
  );
}
