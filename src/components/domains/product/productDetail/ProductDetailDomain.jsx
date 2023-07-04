import React from 'react';
import { useSearchParams } from 'react-router-dom';

export default function ProductDetailDomain() {
  const [params] = useSearchParams();
  const productId = params.get('productId');
  console.log('productId ', productId);
  return (
    <section>
      <header>
        <h1>상품상세</h1>
      </header>
      <article>
        <div>상품내용</div>
      </article>
    </section>
  );
}
