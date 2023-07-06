import React from 'react';
import CategoryButton from '../molecules/CategoryButton';
import MoreButton from '../molecules/MoreButton';
import ProductInfo from '../molecules/ProductInfo';
import Title from '../molecules/Title';
import styles from '@styles/atomics/organisms/product-items.module.scss';
import cx from 'classnames';
// import Swiper core and required modules
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectCoverflow,
  Autoplay,
} from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-coverflow';

export default function ProductItems({
  title,
  itemList,
  isMore,
  isCategory,
  categoryList,
  isSwiper,
}) {
  return (
    <div className={styles.wrap}>
      {/* 타이틀 */}
      <Title>{title}</Title>
      {/* 카테고리 목록 */}
      <div className={styles.contents}>
        {isCategory && categoryList?.length > 0 && (
          <div className={styles.first}>
            {categoryList.map((item, index) => (
              <CategoryButton key={index}>{item.name}</CategoryButton>
            ))}
          </div>
        )}
        {isMore && (
          <div className={styles.second}>
            {/* 더보기 버튼 */}
            <MoreButton onClick={() => console.log('더보기')} />
          </div>
        )}
        <div className={styles.third}>
          {/* 아이템 목록 */}
          {isSwiper ? (
            <Swiper
              className={styles.swiper_wrap}
              effect={'coverflow'}
              grabCursor={true}
              // centeredSlides={true}
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              loop={true}
              modules={[
                Navigation,
                Pagination,
                Scrollbar,
                A11y,
                EffectCoverflow,
                Autoplay,
              ]}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              slidesPerView={4}
              navigation
              pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
              // onSlideChange={() => console.log('slide change')}
            >
              {itemList?.length > 0 &&
                itemList.map((item, index) => (
                  <SwiperSlide
                    key={index}
                    className={`${styles.item} ${styles.no_selection}`}
                  >
                    <ProductInfo
                      productId={item.productId}
                      name={item.name}
                      onError={item.onError}
                      price={item.price}
                      src={item.image}
                    />
                  </SwiperSlide>
                ))}
            </Swiper>
          ) : (
            <>
              {itemList?.length > 0 &&
                itemList.map((item, index) => (
                  <div
                    key={index}
                    className={cx(
                      styles.item,
                      styles.item_border_active,
                      styles.active_margin,
                    )}
                  >
                    <ProductInfo
                      productId={item.productId}
                      name={item.name}
                      onError={item.onError}
                      price={item.price}
                      src={item.image}
                    />
                  </div>
                ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
